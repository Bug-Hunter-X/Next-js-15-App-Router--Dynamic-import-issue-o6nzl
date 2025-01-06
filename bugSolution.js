```javascript
// pages/index.js

export default async function Home() {
  const module = await import('./dynamic-module');

  return (
    <div>
      <h1>Hello from Home page</h1>
      {module.default}
    </div>
  );
}

// dynamic-module.js

export default () => <p>I'm dynamically imported!</p>;
```