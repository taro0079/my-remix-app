import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <p id="index-page">
      This is a demo for user
      <br />
      Check out{" "}
      <a href="https://remix.run" target="_blank">the docs at remix.run</a>
    </p>
  )
}
