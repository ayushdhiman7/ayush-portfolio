import { Download, FileText, Settings } from 'lucide-react';

export const steps = [
  {
    id: 1,
    title: 'Install the extensions',
    icon: <Download className="size-4" />,
    content: [
      {
        type: 'instruction',
        text: 'Open the Extensions panel in VS Code / Cursor',
      },
      {
        type: 'instruction',
        text: 'Search and install each extension below one by one',
      },
      {
        type: 'instruction',
        text: 'Material Icon Theme — file icons',
      },
      {
        type: 'instruction',
        text: 'Vue - Official (Volar) — Vue support',
      },
      {
        type: 'instruction',
        text: 'PHP Intelephense + DEVSENSE PHP Tools — PHP/Laravel support',
      },
      {
        type: 'instruction',
        text: 'Tailwind CSS IntelliSense — Tailwind autocomplete',
      },
      {
        type: 'instruction',
        text: 'ES7+ React snippets — React snippets',
      },
      {
        type: 'instruction',
        text: 'Prettier — code formatter',
      },
      {
        type: 'instruction',
        text: 'ESLint — linting',
      },
      {
        type: 'instruction',
        text: 'GitLens + Git Graph — git history & blame',
      },
      {
        type: 'instruction',
        text: 'Error Lens — inline error highlighting',
      },
      {
        type: 'instruction',
        text: 'Thunder Client — API testing inside the editor',
      },
      {
        type: 'instruction',
        text: 'Live Server — instant local preview',
      },
      {
        type: 'instruction',
        text: 'WakaTime — automatic coding time tracking',
      },
    ],
  },
  {
    id: 2,
    title: 'Editor preferences',
    icon: <FileText className="size-4" />,
    content: [
      {
        type: 'instruction',
        text: 'Open Command Palette by pressing the keyboard shortcut',
      },
      {
        type: 'shortcut',
        text: 'Cmd + ⇧ + P (Mac) / Ctrl + ⇧ + P (Windows)',
      },
      {
        type: 'instruction',
        text: 'Type "Preferences: Open User Settings" and press Enter ⏎',
      },
      {
        type: 'instruction',
        text: 'Set font size to 15 and tab size to 5',
      },
      {
        type: 'instruction',
        text: 'Enable Format on Save',
      },
      {
        type: 'instruction',
        text: 'Enable smooth cursor caret animation and smooth cursor blinking',
      },
      {
        type: 'instruction',
        text: 'Enable auto-save after delay',
      },
      {
        type: 'instruction',
        text: 'Use Material Icon Theme for file icons',
      },
    ],
  },
  {
    id: 3,
    title: 'VS Code Settings',
    icon: <Settings className="size-4" />,
    content: [
      {
        type: 'instruction',
        text: 'Open Command Palette by pressing the keyboard shortcut',
      },
      {
        type: 'shortcut',
        text: 'Cmd + ⇧ + P (Mac) / Ctrl + ⇧ + P (Windows)',
      },
      {
        type: 'instruction',
        text: 'Enter the text in prompt and press Enter ⏎',
      },
      {
        type: 'prompt',
        text: 'Preferences: Open Settings (JSON)',
      },
      {
        type: 'instruction',
        text: 'Copy the settings.json from the below window',
      },
    ],
  },
];

export const settingsJson = `{
    "editor.fontSize": 15,
    "editor.tabSize": 5,
    "files.autoSave": "afterDelay",
    "workbench.iconTheme": "material-icon-theme",
    "editor.formatOnSave": true,
    "editor.formatOnSaveMode": "modifications",
    "editor.cursorSmoothCaretAnimation": "on",
    "editor.cursorBlinking": "smooth",
    "explorer.confirmDelete": false,
    "explorer.confirmPasteNative": false,
    "diffEditor.ignoreTrimWhitespace": false,
    "javascript.updateImportsOnFileMove.enabled": "never",
    "github.copilot.nextEditSuggestions.enabled": true,
    "[javascript]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[css]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[vue]": {
      "editor.defaultFormatter": "Vue.volar"
    },
    "[php]": {
      "editor.defaultFormatter": "DEVSENSE.phptools-vscode"
    }
  }`;
