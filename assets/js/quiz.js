function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

window.renderQuiz = function renderQuiz(lesson) {
  const quizMount = document.querySelector("[data-quiz]");
  if (!quizMount) return;

  const questions = lesson.questions;
  quizMount.innerHTML = `
    <form class="quiz-form" novalidate>
      ${questions.map((question, questionIndex) => `
        <fieldset class="question-card" data-question-index="${questionIndex}">
          <legend>
            <span>Question ${questionIndex + 1}</span>
            ${escapeHtml(question.prompt)}
          </legend>
          <div class="answer-list">
            ${question.options.map((option, optionIndex) => `
              <label class="answer-option">
                <input type="radio" name="question-${questionIndex}" value="${optionIndex}">
                <span>${escapeHtml(option)}</span>
              </label>
            `).join("")}
          </div>
          <p class="question-feedback" id="feedback-${questionIndex}" aria-live="polite"></p>
        </fieldset>
      `).join("")}
      <div class="quiz-actions">
        <button class="button" type="submit">Check Answers</button>
        <button class="button button--secondary" type="button" data-retry hidden>Retry Knowledge Check</button>
      </div>
      <div class="quiz-summary" tabindex="-1" aria-live="polite"></div>
    </form>
  `;

  const form = quizMount.querySelector("form");
  const retryButton = form.querySelector("[data-retry]");
  const summary = form.querySelector(".quiz-summary");

  const storageKey = `soft_skills_quiz_lesson_${lesson.id}`;

  function checkAnswers(showFocus) {
    let score = 0;
    let answeredCount = 0;
    const currentSelections = [];

    questions.forEach((question, questionIndex) => {
      const selected = form.querySelector(`input[name="question-${questionIndex}"]:checked`);
      const card = form.querySelector(`[data-question-index="${questionIndex}"]`);
      const feedback = form.querySelector(`#feedback-${questionIndex}`);
      const options = form.querySelectorAll(`input[name="question-${questionIndex}"]`);

      card.classList.remove("is-correct", "is-incorrect", "is-missing");
      card.querySelectorAll(".answer-option").forEach((label) => {
        label.classList.remove("is-correct-answer", "is-selected-wrong");
      });

      if (!selected) {
        card.classList.add("is-missing");
        feedback.textContent = "Choose an answer for this question, then check again.";
        currentSelections.push(null);
        return;
      }

      answeredCount += 1;
      const selectedIndex = Number(selected.value);
      currentSelections.push(selectedIndex);

      const correctInput = Array.from(options).find((input) => Number(input.value) === question.answer);
      const correctLabel = correctInput.closest(".answer-option");
      correctLabel.classList.add("is-correct-answer");

      if (selectedIndex === question.answer) {
        score += 1;
        card.classList.add("is-correct");
        feedback.textContent = `Correct. ${question.feedback}`;
      } else {
        card.classList.add("is-incorrect");
        selected.closest(".answer-option").classList.add("is-selected-wrong");
        feedback.textContent = `Not quite. Correct answer: ${question.options[question.answer]}. ${question.feedback}`;
      }
    });

    const isFullyAnswered = answeredCount === questions.length;

    // Save to localStorage
    const quizState = {
      selections: currentSelections,
      submitted: isFullyAnswered
    };
    localStorage.setItem(storageKey, JSON.stringify(quizState));

    if (answeredCount < questions.length) {
      summary.className = "quiz-summary quiz-summary--notice";
      summary.textContent = `You answered ${answeredCount} of ${questions.length} questions. Finish the remaining questions when you are ready.`;
    } else {
      summary.className = "quiz-summary quiz-summary--complete";
      summary.textContent = `Nice work. You completed this lesson's Knowledge Check with ${score} out of ${questions.length} correct. You can retry this check as many times as needed.`;
      retryButton.hidden = false;
    }

    if (showFocus) {
      summary.focus();
    }
  }

  // Load saved state
  const savedStateStr = localStorage.getItem(storageKey);
  if (savedStateStr) {
    try {
      const savedState = JSON.parse(savedStateStr);
      if (savedState && Array.isArray(savedState.selections)) {
        savedState.selections.forEach((selIndex, questionIndex) => {
          if (selIndex !== null && selIndex !== undefined) {
            const input = form.querySelector(`input[name="question-${questionIndex}"][value="${selIndex}"]`);
            if (input) {
              input.checked = true;
            }
          }
        });
        if (savedState.submitted) {
          checkAnswers(false);
        }
      }
    } catch (e) {
      console.error("Failed to restore quiz state", e);
    }
  }

  // Auto-save selections as drafts on change
  form.addEventListener("change", () => {
    const currentSelections = [];
    questions.forEach((_, questionIndex) => {
      const selected = form.querySelector(`input[name="question-${questionIndex}"]:checked`);
      currentSelections.push(selected ? Number(selected.value) : null);
    });

    const quizState = {
      selections: currentSelections,
      submitted: false // Reset submitted to allow editing draft before re-checking
    };
    localStorage.setItem(storageKey, JSON.stringify(quizState));

    if (window.updateCompletionCard) {
      window.updateCompletionCard(lesson);
    }
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    checkAnswers(true);
    if (window.updateCompletionCard) {
      window.updateCompletionCard(lesson);
    }
  });

  retryButton.addEventListener("click", () => {
    localStorage.removeItem(storageKey);
    form.reset();
    form.querySelectorAll(".question-card").forEach((card) => {
      card.classList.remove("is-correct", "is-incorrect", "is-missing");
    });
    form.querySelectorAll(".answer-option").forEach((label) => {
      label.classList.remove("is-correct-answer", "is-selected-wrong");
    });
    form.querySelectorAll(".question-feedback").forEach((feedback) => {
      feedback.textContent = "";
    });
    summary.className = "quiz-summary";
    summary.textContent = "";
    retryButton.hidden = true;
    
    if (window.updateCompletionCard) {
      window.updateCompletionCard(lesson);
    }

    const firstInput = form.querySelector("input");
    if (firstInput) {
      firstInput.focus();
    }
  });
};
