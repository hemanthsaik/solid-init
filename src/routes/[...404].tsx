import { A } from "@solidjs/router";

export default function NotFound() {
  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <img src="/images/404.svg" alt="page not found" />
      <p class="my-4">
        <A href="/dashboard/home" class="text-sky-600 hover:underline">
          Home
        </A>
      </p>
    </main>
  );
}
