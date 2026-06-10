# Soft Skills for Career Success

> [!NOTE]
> ### 🚀 Live Website
> This project is live on GitHub Pages! You can view and interact with the study site here:
> **[msac-cisw.github.io/Soft-Skills-Video-Lessons](https://msac-cisw.github.io/Soft-Skills-Video-Lessons/)**

This is a lightweight, student-facing study website for the eight-video Soft Skills for Career Success series.

## Local use

Open `index.html` in a browser, or run a simple local server from this folder:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Updating content

- `video-embed-codes.md` is the source file for the original video order, titles, and embed codes.
- `assets/js/lessons.js` contains lesson metadata, prompts, iframe embed code, and Knowledge Check questions.
- `assets/js/quiz.js` contains the shared quiz rendering and scoring behavior.
- Each lesson should keep exactly 5 questions in `lessons.js`.

## Canvas embedding

Once hosted, the full study site can be embedded in Canvas with an iframe:

```html
<iframe src="URL_TO_HOSTED_SITE" width="100%" height="900" style="border:0;" loading="lazy"></iframe>
```

Instructors may also link directly to individual lesson pages, such as `lessons/lesson-1.html`, if they want students to open a specific lesson from Canvas.

## Features

- **Progress Persistence**: Student answers to Knowledge Checks and saved reflections are persisted in the browser (`localStorage`), preventing progress loss on refreshes or navigation.
- **PDF Completion Reports**: Completing both sections of a lesson unlocks a **"Lesson Completed! 🎉"** panel, allowing students to print or save a formatted academic receipt (study report) showing their quiz answers, correctness, correct keys, and reflection text.
- **Slide-out Navigation Menu**: A drawer overlay triggered by a hamburger button makes it easy to jump directly to any lesson. Completed lessons display checkmarks in the list.
- **About Modal**: Toggled by a `?` icon, this dialog displays academic details, maintainer info, and credits.

## GitHub Pages Deployment

To host this repository on GitHub Pages:
1. Push this repository to a public or private GitHub repository.
2. Navigate to the repository **Settings** tab.
3. In the left sidebar under the "Code and automation" section, click **Pages**.
4. Under **Build and deployment**, set the Source to **Deploy from a branch**.
5. Choose your main branch (usually `main`) and the `/ (root)` folder, then click **Save**.
6. GitHub will build and generate a URL for your hosted site (e.g., `https://username.github.io/repository-name/`). Use this URL as the source in your Canvas iframe code.

## Credits & Maintainer

- **Department**: Computer Information Systems Department, Mt. San Antonio College ([www.mtsac.edu/cis](https://www.mtsac.edu/cis))
- **Maintainer**: Sable Cantus ([www.cantus.us/msac](https://www.cantus.us/msac))
- **Videos recorded by**: Matthias Paretsky
- **Editing by**: Ethan Cantus
