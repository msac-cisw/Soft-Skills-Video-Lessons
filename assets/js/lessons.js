/*
  Instructor editing note:
  This file is the main content source for the study site. Update lesson text,
  prompts, embed codes, and Knowledge Check questions here.
*/
window.SOFT_SKILLS_LESSONS = [
  {
    id: 1,
    title: "Smart Goals",
    embedHtml: '<iframe title="Smart Goals" src="https://3cmediasolutions.org/privid/464668?embed=&key=bf29853bf53336a8705e9b5db9c25983e4f7508f&width=640&height=360" width="640" height="360" scrolling="no" allowfullscreen frameborder="0"></iframe>',
    description: "Learn how to turn a broad goal into a clear plan you can track and complete.",
    objective: "Use the SMART framework to write a specific, realistic goal with a clear deadline.",
    beforePrompt: "Before you watch, think about one school, work, or personal goal that feels important but still a little unclear.",
    whilePrompt: "While watching, note one part of the SMART framework that would make your goal easier to follow through on.",
    reflectionPrompt: "What is one SMART goal you could start this week, and what first step would make it easier to begin?",
    questions: [
      {
        type: "multiple-choice",
        prompt: "Which goal best follows the SMART goal approach?",
        options: [
          "I will improve my study habits sometime soon.",
          "I will study my notes for 25 minutes after class on Monday, Wednesday, and Friday this week.",
          "I will become better at everything this semester.",
          "I will try harder when I remember."
        ],
        answer: 1,
        feedback: "A strong SMART goal is specific, measurable, realistic, relevant, and time-bound."
      },
      {
        type: "true-false",
        prompt: "True or false: A SMART goal should include a way to tell whether progress is happening.",
        options: ["True", "False"],
        answer: 0,
        feedback: "Measurement helps you know whether your plan is working or needs adjustment."
      },
      {
        type: "scenario",
        prompt: "A student says, \"I want to get organized.\" What would make this goal stronger?",
        options: [
          "Make it broader so it applies to everything.",
          "Add a specific action, schedule, and deadline.",
          "Wait until the semester is over to decide.",
          "Focus only on the final result, not the steps."
        ],
        answer: 1,
        feedback: "Specific actions and deadlines turn a good intention into a usable plan."
      },
      {
        type: "multiple-choice",
        prompt: "What does the \"A\" in SMART usually remind you to check?",
        options: ["Amazing", "Achievable", "Automatic", "Advanced"],
        answer: 1,
        feedback: "Achievable goals stretch you without depending on impossible conditions."
      },
      {
        type: "scenario",
        prompt: "Your goal is not working after two weeks. What is the most productive next step?",
        options: [
          "Drop the goal because it was not perfect.",
          "Blame yourself and stop tracking it.",
          "Review the goal and adjust the action steps or timeline.",
          "Make the goal less specific."
        ],
        answer: 2,
        feedback: "SMART goals are tools. It is normal to revise the plan when you learn what works."
      }
    ]
  },
  {
    id: 2,
    title: "Time Management Skills",
    embedHtml: '<iframe title="Time Management Skills" src="https://3cmediasolutions.org/privid/464842?embed=&key=295a43e09855090470cb58ca0f091e9e899bf3b7&width=640&height=360" width="640" height="360" scrolling="no" allowfullscreen frameborder="0"></iframe>',
    description: "Practice choosing priorities, planning ahead, and protecting time for important work.",
    objective: "Identify practical time management strategies that support school, work, and personal responsibilities.",
    beforePrompt: "Before you watch, think about a time when a deadline surprised you or a task took longer than expected.",
    whilePrompt: "While watching, write down one strategy you could use before your next busy week.",
    reflectionPrompt: "What is one change you could make to your schedule that would reduce stress this week?",
    questions: [
      {
        type: "multiple-choice",
        prompt: "Which action is the best example of proactive time management?",
        options: [
          "Waiting until you feel pressure before starting.",
          "Listing tasks, estimating time, and scheduling work blocks.",
          "Keeping every task in your head.",
          "Doing only the easiest tasks first every day."
        ],
        answer: 1,
        feedback: "Planning tasks and time blocks helps you make decisions before stress takes over."
      },
      {
        type: "true-false",
        prompt: "True or false: Prioritizing means deciding which tasks matter most, not just which tasks are fastest.",
        options: ["True", "False"],
        answer: 0,
        feedback: "Fast tasks can be useful, but priority should also consider deadlines, impact, and importance."
      },
      {
        type: "scenario",
        prompt: "You have a quiz tomorrow and a project due next week. What is a balanced choice?",
        options: [
          "Ignore the project until the night before.",
          "Spend all night on the project and skip quiz review.",
          "Review for the quiz today and schedule smaller project steps for the week.",
          "Do whichever assignment seems more fun."
        ],
        answer: 2,
        feedback: "Time management often means matching effort to urgency while still making progress on larger work."
      },
      {
        type: "multiple-choice",
        prompt: "Why can large tasks feel easier after they are broken into smaller steps?",
        options: [
          "Smaller steps remove the need for deadlines.",
          "Smaller steps make progress clearer and less overwhelming.",
          "Smaller steps mean the task no longer matters.",
          "Smaller steps guarantee no interruptions."
        ],
        answer: 1,
        feedback: "Breaking work down makes it easier to start, track, and complete."
      },
      {
        type: "scenario",
        prompt: "A classmate often underestimates how long assignments take. What advice is most useful?",
        options: [
          "Schedule every task for the final hour before it is due.",
          "Add buffer time and start earlier than the minimum plan.",
          "Only work when motivation is high.",
          "Stop using deadlines."
        ],
        answer: 1,
        feedback: "Buffer time protects your plan from interruptions, confusion, and tasks that take longer than expected."
      }
    ]
  },
  {
    id: 3,
    title: "Grow Your EQ",
    embedHtml: '<iframe title="Grow Your EQ" src="https://3cmediasolutions.org/privid/464980?embed=&key=7303f076f99b35bbe4d45119d3e1e3f680fe863a&width=640&height=360" width="640" height="360" scrolling="no" allowfullscreen frameborder="0"></iframe>',
    description: "Explore emotional intelligence and how self-awareness can improve daily interactions.",
    objective: "Recognize how emotional intelligence supports self-management, communication, and relationships.",
    beforePrompt: "Before you watch, think about a recent moment when emotions affected a conversation or decision.",
    whilePrompt: "While watching, notice one EQ habit that could help you pause before reacting.",
    reflectionPrompt: "What is one situation where stronger emotional awareness could help you respond more effectively?",
    questions: [
      {
        type: "multiple-choice",
        prompt: "What does emotional intelligence help you do?",
        options: [
          "Avoid all emotions at school and work.",
          "Notice, understand, and manage emotions in yourself and others.",
          "Win every disagreement quickly.",
          "Replace communication with assumptions."
        ],
        answer: 1,
        feedback: "EQ is about understanding emotions and using that awareness to respond thoughtfully."
      },
      {
        type: "true-false",
        prompt: "True or false: Self-awareness is part of emotional intelligence.",
        options: ["True", "False"],
        answer: 0,
        feedback: "Self-awareness helps you recognize what you are feeling and how it may affect your behavior."
      },
      {
        type: "scenario",
        prompt: "You receive a short message that feels rude. What response shows strong EQ?",
        options: [
          "Reply immediately with the same tone.",
          "Pause, consider other explanations, and ask for clarification if needed.",
          "Assume the person intended to offend you.",
          "Forward the message to everyone."
        ],
        answer: 1,
        feedback: "Pausing and checking your interpretation can prevent unnecessary conflict."
      },
      {
        type: "multiple-choice",
        prompt: "Which habit can strengthen emotional intelligence over time?",
        options: [
          "Ignoring feedback.",
          "Reflecting on reactions and practicing empathy.",
          "Avoiding all difficult conversations.",
          "Assuming your first reaction is always correct."
        ],
        answer: 1,
        feedback: "Reflection and empathy help EQ grow through practice."
      },
      {
        type: "scenario",
        prompt: "A teammate seems frustrated during group work. What is a constructive first step?",
        options: [
          "Tell them they are overreacting.",
          "Ignore them until the project ends.",
          "Ask a respectful question and listen to their concern.",
          "Take over the whole project without discussion."
        ],
        answer: 2,
        feedback: "Respectful curiosity helps you understand the situation before deciding what to do next."
      }
    ]
  },
  {
    id: 4,
    title: "Adaptability & Resilience",
    embedHtml: '<iframe title="Adaptability & Resilience" src="https://3cmediasolutions.org/privid/465024?embed=&key=9ba449a45befa49966eeddb682799f55c92994a1&width=640&height=360" width="640" height="360" scrolling="no" allowfullscreen frameborder="0"></iframe>',
    description: "Build confidence in adjusting to change, setbacks, and unexpected challenges.",
    objective: "Describe how adaptability and resilience help you recover, adjust, and keep moving forward.",
    beforePrompt: "Before you watch, think about a time when a plan changed and you had to adjust quickly.",
    whilePrompt: "While watching, note one strategy that could help you respond to setbacks without giving up.",
    reflectionPrompt: "What is one challenge you are facing now, and what flexible next step could help?",
    questions: [
      {
        type: "multiple-choice",
        prompt: "What does adaptability mean in a school or work setting?",
        options: [
          "Refusing to change once a plan is made.",
          "Adjusting your approach when circumstances or information change.",
          "Avoiding unfamiliar tasks.",
          "Waiting for someone else to solve every problem."
        ],
        answer: 1,
        feedback: "Adaptability is the ability to adjust while still working toward the goal."
      },
      {
        type: "true-false",
        prompt: "True or false: Resilience means you never feel stress or disappointment.",
        options: ["True", "False"],
        answer: 1,
        feedback: "Resilience means you can recover and keep going, even when stress or disappointment is real."
      },
      {
        type: "scenario",
        prompt: "Your group project plan falls apart because one member is unavailable. What shows adaptability?",
        options: [
          "Stop working because the original plan changed.",
          "Review the remaining tasks and create a revised plan.",
          "Ignore the problem and hope it disappears.",
          "Blame one person for the whole situation."
        ],
        answer: 1,
        feedback: "A revised plan helps the group respond to the new reality."
      },
      {
        type: "multiple-choice",
        prompt: "Which self-talk statement supports resilience?",
        options: [
          "This setback means I cannot succeed.",
          "I can learn from this and choose my next step.",
          "I should never ask for help.",
          "If it is hard, it is not worth doing."
        ],
        answer: 1,
        feedback: "Resilient thinking looks for learning and next steps."
      },
      {
        type: "scenario",
        prompt: "You get a lower grade than expected. What is the most resilient response?",
        options: [
          "Avoid looking at the feedback.",
          "Review feedback, ask questions if needed, and adjust your study plan.",
          "Assume every future assignment will go badly.",
          "Quit trying in the course."
        ],
        answer: 1,
        feedback: "Using feedback turns a setback into information you can act on."
      }
    ]
  },
  {
    id: 5,
    title: "Critical Thinking",
    embedHtml: '<iframe title="Critical Thinking" src="https://3cmediasolutions.org/privid/465212?embed=&key=3cec88bd04d6fb32675b1e60e55072ce6cb0e20d&width=640&height=360" width="640" height="360" scrolling="no" allowfullscreen frameborder="0"></iframe>',
    description: "Practice asking better questions, checking evidence, and making thoughtful decisions.",
    objective: "Apply critical thinking by questioning assumptions, evaluating evidence, and comparing options.",
    beforePrompt: "Before you watch, think about a decision where you needed more than a quick opinion.",
    whilePrompt: "While watching, note one question that could help you evaluate information more carefully.",
    reflectionPrompt: "What is one claim, decision, or problem in your life that would benefit from stronger evidence?",
    questions: [
      {
        type: "multiple-choice",
        prompt: "Which question is most connected to critical thinking?",
        options: [
          "What evidence supports this claim?",
          "How fast can I agree?",
          "Who is the loudest person in the room?",
          "Can I skip the details?"
        ],
        answer: 0,
        feedback: "Critical thinking asks for evidence, reasoning, and context."
      },
      {
        type: "true-false",
        prompt: "True or false: Critical thinking means being negative about every idea.",
        options: ["True", "False"],
        answer: 1,
        feedback: "Critical thinking is careful and curious, not automatically negative."
      },
      {
        type: "scenario",
        prompt: "You see a dramatic claim online. What is the strongest first step?",
        options: [
          "Share it quickly before checking.",
          "Check the source, evidence, and whether reliable sources agree.",
          "Believe it because it is dramatic.",
          "Ignore all information online."
        ],
        answer: 1,
        feedback: "Checking source quality and evidence helps you avoid spreading weak information."
      },
      {
        type: "multiple-choice",
        prompt: "What is an assumption?",
        options: [
          "A fact that has been fully proven.",
          "Something accepted as true without enough checking.",
          "A required deadline.",
          "A final answer on a quiz."
        ],
        answer: 1,
        feedback: "Recognizing assumptions helps you decide what needs more evidence."
      },
      {
        type: "scenario",
        prompt: "Two solutions seem possible for a problem. What critical thinking move is most useful?",
        options: [
          "Pick the first solution immediately.",
          "Compare benefits, risks, evidence, and consequences.",
          "Choose the option your friend likes without discussion.",
          "Avoid making any decision."
        ],
        answer: 1,
        feedback: "Comparing options helps you make a reasoned choice."
      }
    ]
  },
  {
    id: 6,
    title: "Conflict Resolution",
    embedHtml: '<iframe title="Conflict Resolution" src="https://3cmediasolutions.org/privid/465336?embed=&key=1faaa9a9a0c5215cb152003a4595c37beb754d44&width=640&height=360" width="640" height="360" scrolling="no" allowfullscreen frameborder="0"></iframe>',
    description: "Learn ways to handle disagreements respectfully and move toward workable solutions.",
    objective: "Use respectful communication strategies to understand conflict and work toward resolution.",
    beforePrompt: "Before you watch, think about a disagreement that became harder because of tone, timing, or assumptions.",
    whilePrompt: "While watching, note one phrase or strategy that could lower tension in a difficult conversation.",
    reflectionPrompt: "What is one conflict-resolution habit you want to practice before your next disagreement?",
    questions: [
      {
        type: "multiple-choice",
        prompt: "What is usually a helpful goal in conflict resolution?",
        options: [
          "Proving the other person is completely wrong.",
          "Understanding concerns and finding a workable next step.",
          "Avoiding all communication forever.",
          "Responding louder than the other person."
        ],
        answer: 1,
        feedback: "Resolution focuses on understanding the issue and moving toward a constructive next step."
      },
      {
        type: "true-false",
        prompt: "True or false: Listening carefully can help reduce conflict.",
        options: ["True", "False"],
        answer: 0,
        feedback: "Listening helps people feel heard and can reveal what the real issue is."
      },
      {
        type: "scenario",
        prompt: "A teammate misses a deadline and you feel frustrated. What is the best first message?",
        options: [
          "\"You never do anything right.\"",
          "\"I noticed the file was not ready today. Can we talk about what happened and what needs to happen next?\"",
          "\"I am removing you from the group without talking.\"",
          "\"Everyone should know you failed.\""
        ],
        answer: 1,
        feedback: "This message names the issue, avoids insults, and opens the door to a solution."
      },
      {
        type: "multiple-choice",
        prompt: "Which phrase is most likely to keep a hard conversation respectful?",
        options: [
          "You always ruin everything.",
          "I want to understand your concern.",
          "This is all your fault.",
          "There is no point talking."
        ],
        answer: 1,
        feedback: "Respectful language helps keep the conversation focused on the problem."
      },
      {
        type: "scenario",
        prompt: "A discussion is becoming heated. What should you do?",
        options: [
          "Pause, lower the tone, and agree on when to continue if needed.",
          "Keep arguing until someone gives up.",
          "Bring up unrelated past problems.",
          "Use sarcasm to win the moment."
        ],
        answer: 0,
        feedback: "A pause can protect the relationship and make problem-solving possible again."
      }
    ]
  },
  {
    id: 7,
    title: "Empathy and Active Listening",
    embedHtml: '<iframe title="Empathy and Active Listening" src="https://3cmediasolutions.org/privid/465526?embed=&key=bd2678d758aca471badc54eef312a5dde3fa4490&width=640&height=360" width="640" height="360" scrolling="no" allowfullscreen frameborder="0"></iframe>',
    description: "Strengthen conversations by listening with attention, curiosity, and respect.",
    objective: "Explain how empathy and active listening support stronger communication and trust.",
    beforePrompt: "Before you watch, think about a time when you could tell someone was truly listening to you.",
    whilePrompt: "While watching, note one listening behavior you could practice in class, work, or daily life.",
    reflectionPrompt: "What is one conversation where active listening could help you understand someone better?",
    questions: [
      {
        type: "multiple-choice",
        prompt: "Which behavior best shows active listening?",
        options: [
          "Planning your response while the other person is still talking.",
          "Looking for the main message, asking clarifying questions, and summarizing what you heard.",
          "Changing the topic quickly.",
          "Interrupting to correct every detail."
        ],
        answer: 1,
        feedback: "Active listening shows attention and checks understanding."
      },
      {
        type: "true-false",
        prompt: "True or false: Empathy means you have to agree with everything someone says.",
        options: ["True", "False"],
        answer: 1,
        feedback: "Empathy means trying to understand another perspective. Agreement is separate."
      },
      {
        type: "scenario",
        prompt: "A classmate says they are overwhelmed. What response shows empathy?",
        options: [
          "\"That sounds like a lot. Do you want to talk through what is most urgent?\"",
          "\"Everyone is busy, so it is not a big deal.\"",
          "\"You should have planned better.\"",
          "\"Let me tell you why my week is worse.\""
        ],
        answer: 0,
        feedback: "This response acknowledges the feeling and offers support without judgment."
      },
      {
        type: "multiple-choice",
        prompt: "Why is paraphrasing useful in active listening?",
        options: [
          "It proves you are smarter.",
          "It checks whether you understood the message correctly.",
          "It ends the conversation immediately.",
          "It lets you avoid asking questions."
        ],
        answer: 1,
        feedback: "Paraphrasing gives the speaker a chance to confirm or clarify."
      },
      {
        type: "scenario",
        prompt: "During a meeting, you disagree with an idea. What is the best listening move before responding?",
        options: [
          "Interrupt as soon as you hear something you dislike.",
          "Ask a question to understand the reasoning behind the idea.",
          "Roll your eyes so others know your opinion.",
          "Stop paying attention."
        ],
        answer: 1,
        feedback: "Understanding the reasoning first leads to a stronger and more respectful response."
      }
    ]
  },
  {
    id: 8,
    title: "Giving and Receiving Feedback",
    embedHtml: '<iframe title="Giving and Receiving Feedback" src="https://3cmediasolutions.org/privid/465768?embed=&key=12e859efb0a93308999cbd644744e7dc289de076&width=640&height=360" width="640" height="360" scrolling="no" allowfullscreen frameborder="0"></iframe>',
    description: "Use feedback as a tool for growth, improvement, and clearer collaboration.",
    objective: "Identify ways to give useful feedback and receive feedback with a growth mindset.",
    beforePrompt: "Before you watch, think about feedback that helped you improve, even if it was hard to hear at first.",
    whilePrompt: "While watching, note one strategy for giving feedback in a clear and respectful way.",
    reflectionPrompt: "What is one piece of feedback you could ask for, and how could you use it to improve?",
    questions: [
      {
        type: "multiple-choice",
        prompt: "Which feedback is most useful?",
        options: [
          "This is bad.",
          "Your introduction is clear; adding one example in paragraph two would make the point stronger.",
          "I do not like it.",
          "Just fix everything."
        ],
        answer: 1,
        feedback: "Useful feedback is specific, respectful, and connected to improvement."
      },
      {
        type: "true-false",
        prompt: "True or false: Receiving feedback well means you must agree with every comment immediately.",
        options: ["True", "False"],
        answer: 1,
        feedback: "Receiving feedback well means listening, considering it, and deciding what action is useful."
      },
      {
        type: "scenario",
        prompt: "Your instructor suggests revising part of an assignment. What is a growth-minded response?",
        options: [
          "Ignore the comment because revision means failure.",
          "Review the feedback and identify one specific improvement to make.",
          "Assume the instructor dislikes you.",
          "Delete the assignment and start over without reading carefully."
        ],
        answer: 1,
        feedback: "A growth mindset treats feedback as information for improvement."
      },
      {
        type: "multiple-choice",
        prompt: "When giving feedback to a peer, what should you focus on?",
        options: [
          "The person’s character.",
          "Specific work, behavior, or choices that can be improved.",
          "Embarrassing them so they remember.",
          "Only vague compliments."
        ],
        answer: 1,
        feedback: "Feedback should focus on changeable actions or work, not personal attacks."
      },
      {
        type: "scenario",
        prompt: "A peer gives feedback that feels unclear. What should you do?",
        options: [
          "Ask a follow-up question for a specific example.",
          "Reject all feedback from that person forever.",
          "Pretend you understand and do nothing.",
          "Respond defensively before they finish."
        ],
        answer: 0,
        feedback: "A clarifying question can turn vague feedback into something useful."
      }
    ]
  }
];

const ESTIMATED_TIME = "8-10 minutes";
const THREE_C_MOBILE_LAYOUT_WIDTH = 480;
const THREE_C_MOBILE_LAYOUT_HEIGHT = 420;

function lessonUrl(id) {
  return `lessons/lesson-${id}.html`;
}

function getLessonById(id) {
  return window.SOFT_SKILLS_LESSONS.find((lesson) => lesson.id === Number(id));
}

function normalizeEmbed(embedHtml) {
  const template = document.createElement("template");
  template.innerHTML = embedHtml.trim();
  const iframe = template.content.querySelector("iframe");

  if (!iframe) {
    return embedHtml;
  }

  iframe.removeAttribute("width");
  iframe.removeAttribute("height");
  iframe.setAttribute("loading", "lazy");
  iframe.setAttribute("allowfullscreen", "");
  return template.innerHTML;
}

function syncThreeCMediaFrameScales() {
  const frames = document.querySelectorAll(".video-frame--3cmedia");
  const shouldScale = window.matchMedia("(max-width: 640px)").matches;

  frames.forEach((frame) => {
    if (!shouldScale) {
      frame.style.removeProperty("--able-player-scale");
      frame.style.removeProperty("height");
      return;
    }

    const innerWidth = Math.max(0, frame.clientWidth - 2);
    const scale = Math.min(1, innerWidth / THREE_C_MOBILE_LAYOUT_WIDTH);
    frame.style.setProperty("--able-player-scale", scale.toFixed(4));
    frame.style.height = `${Math.ceil(THREE_C_MOBILE_LAYOUT_HEIGHT * scale) + 2}px`;
  });
}

function renderHomePage() {
  const lessonGrid = document.querySelector("[data-lesson-grid]");
  if (!lessonGrid) return;

  const shell = document.querySelector(".site-shell");
  if (shell && !document.getElementById("info-btn")) {
    const header = document.createElement("header");
    header.className = "site-header";
    header.innerHTML = `
      <button class="info-btn" id="info-btn" aria-label="Show department and maintainer info" aria-haspopup="dialog">?</button>
    `;
    shell.prepend(header);
  }

  lessonGrid.innerHTML = window.SOFT_SKILLS_LESSONS.map((lesson) => {
    const savedReflection = localStorage.getItem(`soft_skills_reflection_lesson_${lesson.id}`);
    const isCompleted = savedReflection && savedReflection.trim().length > 0;
    
    return `
      <article class="lesson-card ${isCompleted ? 'lesson-card--completed' : ''}">
        ${isCompleted ? `
          <span class="lesson-card__status-indicator" aria-label="Reflection completed" title="Reflection completed">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </span>
        ` : ''}
        <div class="lesson-card__meta">Lesson ${lesson.id} of ${window.SOFT_SKILLS_LESSONS.length}</div>
        <h2>${lesson.title}</h2>
        <p>${lesson.description}</p>
        <a class="button ${isCompleted ? 'button--secondary' : ''}" href="${lessonUrl(lesson.id)}" aria-label="${isCompleted ? 'Review' : 'Start'} lesson ${lesson.id}: ${lesson.title}">
          ${isCompleted ? 'Review Lesson' : 'Start Lesson'}
        </a>
      </article>
    `;
  }).join("");
}

function renderLessonPage() {
  const page = document.querySelector("[data-lesson-page]");
  if (!page) return;

  const lesson = getLessonById(page.dataset.lessonId);
  if (!lesson) {
    page.innerHTML = `
      <section class="panel">
        <h1>Lesson not found</h1>
        <p>This lesson could not be loaded.</p>
        <a class="button" href="../index.html">Back to Home</a>
      </section>
    `;
    return;
  }

  const previous = getLessonById(lesson.id - 1);
  const next = getLessonById(lesson.id + 1);
  document.title = `${lesson.title} | Soft Skills for Career Success`;

  page.innerHTML = `
    <nav class="top-nav" aria-label="Lesson navigation">
      <a href="../index.html" class="back-home-link">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle; margin-right: 4px; display: inline-block;">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
        Back to Home
      </a>
      <span>Lesson ${lesson.id} of ${window.SOFT_SKILLS_LESSONS.length}</span>
      <div class="top-nav__actions">
        <button class="info-btn" id="info-btn" aria-label="Show department and maintainer info" aria-haspopup="dialog">?</button>
        <button class="hamburger-btn" id="hamburger-btn" aria-label="Open lesson navigation menu" aria-expanded="false" aria-controls="nav-drawer">
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>
    </nav>

    <!-- Navigation Drawer -->
    <div class="nav-drawer" id="nav-drawer" aria-hidden="true" tabindex="-1">
      <div class="nav-drawer__overlay" data-close-drawer></div>
      <div class="nav-drawer__content" role="dialog" aria-modal="true" aria-label="Lesson navigation list">
        <div class="nav-drawer__header">
          <h2>Lessons Menu</h2>
          <button class="close-drawer-btn" data-close-drawer aria-label="Close menu">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <nav class="nav-drawer__list">
          ${window.SOFT_SKILLS_LESSONS.map(l => {
            const savedReflection = localStorage.getItem(`soft_skills_reflection_lesson_${l.id}`);
            const isCompleted = savedReflection && savedReflection.trim().length > 0;
            const isCurrent = l.id === lesson.id;
            return `
              <a href="lesson-${l.id}.html" class="nav-drawer__item ${isCurrent ? 'nav-drawer__item--current' : ''} ${isCompleted ? 'nav-drawer__item--completed' : ''}" ${isCurrent ? 'aria-current="page"' : ''}>
                <span class="nav-drawer__item-num">Lesson ${l.id}</span>
                <span class="nav-drawer__item-title">${escapeHtml(l.title)}</span>
                ${isCompleted ? '<span class="nav-drawer__item-badge" aria-label="Completed">✓</span>' : ''}
              </a>
            `;
          }).join("")}
        </nav>
        <div class="nav-drawer__footer">
          <a href="../index.html" class="button button--secondary" style="width: 100%;">Back to Home Page</a>
        </div>
      </div>
    </div>

    <header class="lesson-header">
      <p class="eyebrow">Soft Skills for Career Success</p>
      <h1>${lesson.title}</h1>
      <p>${lesson.description}</p>
      <p class="time-label">Estimated time: ${ESTIMATED_TIME}</p>
    </header>

    <section class="video-section" aria-label="${lesson.title} video">
      <div class="video-frame${lesson.embedHtml.includes('3cmediasolutions.org') ? ' video-frame--3cmedia' : ''}${navigator.userAgent.toLowerCase().includes('firefox') ? ' video-frame--firefox' : ''}">
        ${normalizeEmbed(lesson.embedHtml)}
      </div>
    </section>

    <section class="lesson-layout" aria-label="Lesson activities">
      <article class="panel">
        <h2>Learning Objective</h2>
        <p>${lesson.objective}</p>
      </article>
      <article class="panel">
        <h2>Before You Watch</h2>
        <p>${lesson.beforePrompt}</p>
      </article>
      <article class="panel">
        <h2>While You Watch</h2>
        <p>${lesson.whilePrompt}</p>
      </article>
    </section>

    <section class="quiz-panel" aria-labelledby="knowledge-check-title">
      <div class="section-heading">
        <p class="eyebrow">After You Watch</p>
        <h2 id="knowledge-check-title">Knowledge Check</h2>
        <p>You can retry this check as many times as needed.</p>
      </div>
      <div data-quiz></div>
    </section>

    <section class="panel reflection-panel" aria-labelledby="reflection-title">
      <h2 id="reflection-title">Reflection</h2>
      <p class="reflection-prompt"><strong>Prompt:</strong> ${lesson.reflectionPrompt}</p>
      <form class="reflection-form" data-reflection-form>
        <div class="form-group">
          <label for="reflection-text" class="visually-hidden">Your reflection text</label>
          <textarea 
            id="reflection-text" 
            name="reflection" 
            placeholder="Type your thoughts, experiences, and key takeaways here..."
            rows="5"
            required
          ></textarea>
        </div>
        <div class="reflection-actions">
          <button type="submit" class="button" data-save-btn>Save Reflection</button>
          <button type="button" class="button button--secondary" data-copy-btn hidden>Copy text</button>
          <button type="button" class="button button--secondary" data-download-btn hidden>Download text</button>
          <span class="save-status" data-save-status aria-live="polite"></span>
        </div>
      </form>
    </section>

    <div data-completion-card-container></div>

    <nav class="bottom-nav" aria-label="Lesson footer navigation">
      <span></span>
      <a class="button button--secondary" href="../index.html">Home</a>
      <span></span>
    </nav>
  `;

  if (window.renderQuiz) {
    window.renderQuiz(lesson);
  }

  syncThreeCMediaFrameScales();

  // Set up reflection form logic
  const reflectionForm = page.querySelector("[data-reflection-form]");
  if (reflectionForm) {
    const textarea = reflectionForm.querySelector("#reflection-text");
    const saveBtn = reflectionForm.querySelector("[data-save-btn]");
    const copyBtn = reflectionForm.querySelector("[data-copy-btn]");
    const downloadBtn = reflectionForm.querySelector("[data-download-btn]");
    const saveStatus = reflectionForm.querySelector("[data-save-status]");

    const storageKey = `soft_skills_reflection_lesson_${lesson.id}`;

    // Load saved reflection if any
    const savedVal = localStorage.getItem(storageKey) || "";
    textarea.value = savedVal;

    // Show/hide copy and download buttons depending on text existence
    const updateButtonsVisibility = () => {
      const hasText = textarea.value.trim().length > 0;
      copyBtn.hidden = !hasText;
      downloadBtn.hidden = !hasText;
    };
    updateButtonsVisibility();

    // Auto-save logic (debounced auto-save on typing)
    let autoSaveTimeout;
    textarea.addEventListener("input", () => {
      updateButtonsVisibility();
      saveStatus.textContent = "Saving draft...";
      saveStatus.className = "save-status status--saving";

      clearTimeout(autoSaveTimeout);
      autoSaveTimeout = setTimeout(() => {
        const textVal = textarea.value;
        localStorage.setItem(storageKey, textVal);
        saveStatus.textContent = "Draft auto-saved";
        saveStatus.className = "save-status status--saving";
        updateCompletionCard(lesson);
      }, 800); // 800ms debounce
    });

    // Formal save on submit
    reflectionForm.addEventListener("submit", (e) => {
      e.preventDefault();
      clearTimeout(autoSaveTimeout);
      const textVal = textarea.value;
      localStorage.setItem(storageKey, textVal);
      
      saveStatus.textContent = "Saved successfully! ✓";
      saveStatus.className = "save-status status--saved";

      updateButtonsVisibility();
      updateCompletionCard(lesson);
    });

    // Copy to clipboard
    copyBtn.addEventListener("click", () => {
      const textVal = textarea.value;
      navigator.clipboard.writeText(textVal)
        .then(() => {
          const originalText = copyBtn.textContent;
          copyBtn.textContent = "Copied! ✓";
          setTimeout(() => {
            copyBtn.textContent = originalText;
          }, 2000);
        })
        .catch(err => {
          console.error("Failed to copy text: ", err);
          alert("Could not copy text. Please select and copy manually.");
        });
    });

    // Download text file
    downloadBtn.addEventListener("click", () => {
      const textVal = textarea.value;
      const blob = new Blob([textVal], { type: "text/plain;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `lesson_${lesson.id}_reflection.txt`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    });
  }

  // Set up navigation drawer logic
  const drawer = page.querySelector("#nav-drawer");
  const hamburgerBtn = page.querySelector("#hamburger-btn");
  const closeElements = page.querySelectorAll("[data-close-drawer]");

  if (drawer && hamburgerBtn) {
    const openDrawer = () => {
      drawer.classList.add("nav-drawer--open");
      drawer.setAttribute("aria-hidden", "false");
      hamburgerBtn.setAttribute("aria-expanded", "true");
      const closeBtn = drawer.querySelector(".close-drawer-btn");
      if (closeBtn) closeBtn.focus();
    };

    const closeDrawer = () => {
      drawer.classList.remove("nav-drawer--open");
      drawer.setAttribute("aria-hidden", "true");
      hamburgerBtn.setAttribute("aria-expanded", "false");
      hamburgerBtn.focus();
    };

    hamburgerBtn.addEventListener("click", openDrawer);
    closeElements.forEach(el => el.addEventListener("click", closeDrawer));

    drawer.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closeDrawer();
      }
    });

    drawer.addEventListener("click", (e) => {
      if (e.target === drawer) {
        closeDrawer();
      }
    });
  }

  // Initial check on load
  updateCompletionCard(lesson);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function preparePrintReport(lesson) {
  let reportDiv = document.querySelector(".print-only-report");
  if (!reportDiv) {
    reportDiv = document.createElement("div");
    reportDiv.className = "print-only-report";
    document.body.appendChild(reportDiv);
  }

  // Load reflection
  const reflectionKey = `soft_skills_reflection_lesson_${lesson.id}`;
  const reflectionText = localStorage.getItem(reflectionKey) || "";

  // Load quiz state
  const quizKey = `soft_skills_quiz_lesson_${lesson.id}`;
  const quizStateStr = localStorage.getItem(quizKey);
  let quizScoreText = "Not completed";
  let quizQuestionsHtml = "";

  if (quizStateStr) {
    try {
      const quizState = JSON.parse(quizStateStr);
      if (quizState && Array.isArray(quizState.selections)) {
        let score = 0;
        quizQuestionsHtml = lesson.questions.map((q, idx) => {
          const studentAnsIdx = quizState.selections[idx];
          const isCorrect = studentAnsIdx === q.answer;
          if (isCorrect) score++;

          const studentAnsText = studentAnsIdx !== null ? q.options[studentAnsIdx] : "Unanswered";
          const correctAnsText = q.options[q.answer];

          return `
            <div class="print-question-item">
              <p class="print-question-prompt"><strong>Question ${idx + 1}:</strong> ${escapeHtml(q.prompt)}</p>
              <p class="print-question-answer">
                Your Answer: <span class="answer-val ${isCorrect ? 'correct' : 'incorrect'}">${escapeHtml(studentAnsText)}</span>
                ${isCorrect ? ' <span class="badge-icon">✓</span>' : ` | Correct Answer: <span class="answer-val correct">${escapeHtml(correctAnsText)}</span> <span class="badge-icon">✗</span>`}
              </p>
            </div>
          `;
        }).join("");
        quizScoreText = `${score} out of ${lesson.questions.length} correct`;
      }
    } catch (e) {
      console.error("Failed to parse quiz state for printing", e);
    }
  }

  const currentDate = new Date().toLocaleString();

  reportDiv.innerHTML = `
    <header class="print-doc-header">
      <div class="print-header-top">Mt. San Antonio College</div>
      <div class="print-header-sub">Computer Information Systems Department</div>
      <h1>Soft Skills Study Report</h1>
      <p class="print-meta-line"><strong>Lesson ${lesson.id}:</strong> ${escapeHtml(lesson.title)}</p>
      <p class="print-meta-line"><strong>Verified Completion Date:</strong> ${currentDate}</p>
    </header>

    <section class="print-doc-section">
      <h2>1. Knowledge Check Results</h2>
      <div class="print-score-summary">
        <strong>Status:</strong> Completed | <strong>Score:</strong> ${quizScoreText}
      </div>
      <div class="print-questions-list">
        ${quizQuestionsHtml}
      </div>
    </section>

    <section class="print-doc-section">
      <h2>2. Reflection Response</h2>
      <div class="print-reflection-block">
        <p class="print-prompt-text"><strong>Prompt:</strong> ${escapeHtml(lesson.reflectionPrompt)}</p>
        <div class="print-response-text">
          ${escapeHtml(reflectionText).replace(/\n/g, "<br>")}
        </div>
      </div>
    </section>

    <footer class="print-doc-footer">
      <p>This document verifies that the student completed all parts of this soft skills lesson.</p>
      <p class="print-url">Generated via: ${window.location.href}</p>
    </footer>
  `;
}

function updateCompletionCard(lesson) {
  const container = document.querySelector("[data-completion-card-container]");
  if (!container) return;

  const reflectionKey = `soft_skills_reflection_lesson_${lesson.id}`;
  const reflectionText = localStorage.getItem(reflectionKey) || "";
  const hasReflection = reflectionText.trim().length > 0;

  const quizKey = `soft_skills_quiz_lesson_${lesson.id}`;
  const quizStateStr = localStorage.getItem(quizKey);
  let hasQuiz = false;
  if (quizStateStr) {
    try {
      const quizState = JSON.parse(quizStateStr);
      hasQuiz = quizState && quizState.submitted;
    } catch (e) {
      // ignore
    }
  }

  if (hasReflection && hasQuiz) {
    container.innerHTML = `
      <section class="panel completion-panel" aria-labelledby="completion-title">
        <div class="completion-content">
          <span class="completion-icon" aria-hidden="true">🎉</span>
          <div>
            <h2 id="completion-title">Lesson Completed!</h2>
            <p>You have successfully finished the Knowledge Check and written your reflection for this lesson.</p>
          </div>
        </div>
        <button class="button button--success" id="print-report-btn">Print Completion Report (PDF)</button>
      </section>
    `;

    const printBtn = document.getElementById("print-report-btn");
    if (printBtn) {
      printBtn.addEventListener("click", () => {
        preparePrintReport(lesson);
        window.print();
      });
    }
  } else {
    container.innerHTML = "";
  }
}

window.updateCompletionCard = updateCompletionCard;

document.addEventListener("DOMContentLoaded", () => {
  setupInfoModal();
  renderHomePage();
  renderLessonPage();
});

window.addEventListener("resize", syncThreeCMediaFrameScales);

function setupInfoModal() {
  let dialog = document.getElementById("info-dialog");
  if (!dialog) {
    dialog = document.createElement("dialog");
    dialog.id = "info-dialog";
    dialog.className = "info-dialog";
    dialog.setAttribute("aria-labelledby", "dialog-title");
    dialog.innerHTML = `
      <div class="info-dialog__content">
        <div class="info-dialog__header">
          <h2 id="dialog-title">About</h2>
          <button class="close-dialog-btn" id="close-info-dialog" aria-label="Close dialog">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <div class="info-dialog__body">
          <div class="info-group">
            <h3>Academic Department</h3>
            <p class="dept-title">Computer Information Systems Department</p>
            <p class="college-title">Mt. San Antonio College</p>
            <a href="https://www.mtsac.edu/cis" target="_blank" rel="noopener" class="info-link">www.mtsac.edu/cis</a>
          </div>
          <div class="info-group">
            <h3>Maintainer</h3>
            <p class="maintainer-title"><strong>Sable Cantus</strong></p>
            <a href="https://www.cantus.us/msac" target="_blank" rel="noopener" class="info-link">www.cantus.us/msac</a>
          </div>
          <div class="info-group">
            <h3>Credits</h3>
            <p>Videos recorded by <strong>Matthias Paretsky</strong></p>
            <p>Editing by <strong>Ethan Cantus</strong></p>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(dialog);
  }

  document.addEventListener("click", (e) => {
    if (e.target && e.target.closest("#info-btn")) {
      dialog.showModal();
    } else if (e.target && e.target.closest("#close-info-dialog")) {
      dialog.close();
    } else if (e.target === dialog) {
      dialog.close();
    }
  });
}
