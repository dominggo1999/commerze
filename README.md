# Commerze

Projek ini dibuat untuk menyelesaikan case study untuk posisi Frontend Developer Intern di [Rakamin](https://www.rakamin.com/).

Deployment preview link : https://commerze-commerze.vercel.app/
UI Component stories : https://commerze-commerze-stories.netlify.app/

## Features

- Menampilkan list produk dari mock API yang dibuat dengan [mockapi.io](https://mockapi.io/)
- Search product
- Infinite scroll product
- Menampilkan detail produk
- Responsive dan mobile friendly
- Halaman About dan Contact
- Dark mode and light mode
- Command palette (cmd-k) untuk memudahkan navigasi
- [Progressive Web Application](https://web.dev/what-are-pwas/) yang bisa di-install di mobile dan desktop untuk mendapatkan native experience. [Cara menginstal PWA bisa di check disini](https://support.google.com/chrome/answer/9658361?hl=en&co=GENIE.Platform=Desktop)

\***_screenshots of of the app features can be seen below_**

## Tech stack dan Development

- Repositori adalah monorepo yang di setup dengan menggunakan [turborepo](https://turbo.build/repo/docs).
- Aplikasi produk listing nya ada di folder apps/commerze
  - Setup aplikasi React JS nya menggunakan [Vite](https://vitejs.dev/)
- Untuk ui dan package2 yang lain ada di folder packages
- Secara umum berikut adalah library/teknologi utama yang digunakan untuk develop aplikasi ini
  - Typescript
  - Styling menggunakan Tailwind CSS dibantu dengan clsx dan [cva](https://www.npmjs.com/package/class-variance-authority).
  - Ada juga UI library lain yang digunakan yaitu [React Aria](https://react-spectrum.adobe.com/react-aria/) yang merupakan tipe library headless jadi untuk styling nya tetap pakai Tailwind CSS.
  - Client state management menggunakan [Zustand](https://github.com/pmndrs/zustand)
  - Api request dan server state management menggunakan kombinasi axios dan [react query](https://react-query-v3.tanstack.com/)
  - Untuk ui component yang hanya menghandle styling dan tampilan di develop di packages/ui secara terisolasi dengan menggunakan [ladle](https://ladle.dev/) yang merupakan alternative [storybook](https://storybook.js.org/) yang lebih ringan yang juga berbasis Vite
  - Untuk testing menggunakan [cypress](https://www.cypress.io/) , namun yang di test masih hanya packages/ui saja dengan menggunakan [cypress component testing](https://docs.cypress.io/guides/component-testing/overview)
  - Aplikasi merupakan sebuah PWA (Progressive Web Apps), diimplementasikan dengan menggunakan [vite-pwa-plugin](https://github.com/vite-pwa/vite-plugin-pwa)
  - Ada juga [github action](https://github.com/features/actions) (CI) buat running test dan build nya, bisa di check di folder .github
  - Eslint dan Prettier
  - Husky untuk pre-commit hook

### How to build and dev

- Install dependencies
  `pnpm install`
- Untuk develop package ui
  `cd packages/ui && pnpm run dev`
- Untuk develop app commerze
  `cd apps/commerze && pnpm run dev`
- Untuk build package ui
  `cd packages/ui && pnpm run build`
- Untuk build app commerze
  `cd apps/commerze && pnpm run build`

\***_bisa baca dokumentasi turborepo dan pnpm terkait folder structure nya_**
