import Head from "next/head";
import Link from "next/link";


export default function Home() {
  return (
    <>
      <Head>
        <title>Fast-Work | Make-life-Easy</title>
        <meta
          name="This website work on work make easy this website have calculator, age calculator and tip calculator for shop and student. This website helpfull for student in study."
          content="This website work on work make easy this website have calculator, age calculator and tip calculator for shop and student. This website helpfull for student in study."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/fast-work.png" />
            <meta name="google-adsense-account" content="ca-pub-5619050529742611"/>
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5619050529742611"
     crossorigin="anonymous"></script>
      </Head>
      <main class="h-screen bg-gray-100 px-4">
        <div class="py-10 min-h-screen">
          <section class="intro">
            <h1 class="text-3xl font-bold mb-4">Welcome to Fast-Work</h1>
            <p class="text-lg text-gray-600">
              Fast-Work is a  website designed  to make your life easier by
              providing you with a set of useful calculators and tools. Whether
              you're a student or a shop owner, our website has got you covered.
            </p>
          </section>
          <section class="why-helpful">
            <h2 class="text-2xl font-bold mb-4">
              Why is Fast-Work helpful for you?
            </h2>
            <ul class="list-none mb-0">
              <li class="mb-4">
                <p class="text-lg text-gray-600">
                  <Link href={"/mathCalculator"}><strong class="font-bold">Calculator:</strong></Link> Our calculator
                  is a powerful tool that can help you with your daily
                  calculations, from simple arithmetic to complex mathematical
                  operations.
                </p>
              </li>
              <li class="mb-4">
                <p class="text-lg text-gray-600">
                  <strong class="font-bold">Age Calculator:</strong> Our age
                  calculator can help you calculate your age in years, months,
                  and days. It's a great tool for students who need to calculate
                  their age for school applications or for anyone who wants to
                  know how old they are.
                </p>
              </li>
              <li class="mb-4">
                <p class="text-lg text-gray-600">
                  <strong class="font-bold">Tip Calculator:</strong> Our tip
                  calculator is designed to help shop owners and students
                  calculate tips easily. Whether you're a waiter or a customer,
                  our tip calculator can help you calculate the perfect tip.
                </p>
              </li>
            </ul>
          </section>
        </div>
      </main>
    </>
  );
}
