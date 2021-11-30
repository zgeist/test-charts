## Getting Started

First, install dependencies:
```bash
npm install
```

Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

For run on custom port

```bash
PORT=8080 npm run dev
```

Make build for production
```bash
npm run build
```
Start production app
```bash
PORT=8080 npm run build
```

## Run E2E testing

For first run in dev mode
```bash
npm run dev
```

You can run test into Cypress UI
```bash
npm run cypress:open
```
or run without UI
```bash
npm run cypress:run
```

## Run Unit testing
```bash
npm run test
```

