# Bolt Landing Page

This project contains a React/TypeScript landing page built with Vite and Tailwind CSS.

## Development

1. Install dependencies
   ```bash
   npm install
   ```
2. Start the development server
   ```bash
   npm run dev
   ```
3. Build for production
   ```bash
   npm run build
   ```

## WordPress integration

A minimal WordPress plugin is included under `wp-plugin/`. After running the build command, copy the generated `dist` directory into `wp-plugin/` (already done in the repository). Compress the `wp-plugin` folder as a ZIP and install it via the WordPress admin panel.

Use the `[bolt_landing]` shortcode in a page or post to display the landing page.
