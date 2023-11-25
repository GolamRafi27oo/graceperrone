let page = document.getElementById("pages");
let loren = document.getElementById("loren");

loren.addEventListener("click", function () {
    page.innerHTML = `
  <section class="ease-in duration-150">
    <h1 class="text-4xl font-bold">LOREM IPSUM:</h1>
    <h1 class="text-2xl font-bold pt-2">
      UNVEILING THE HYPERREAL SIMULACRA
    </h1>
    <p class="text-base pt-2 font-semibold">
      "LOREM IPSUM" IS CONCERNED WITH THE UNIQUE INTERACTIONS BETWEEN GEN-Z
      AND THE INTERNET, WHERE THE BOUNDARIES BETWEEN REALITY AND SIMULATION
      ARE BECOMING INCREASINGLY BLURRED. INSPIRED BY DELEUZES’ “DIFFERENCE &
      REPETITION” AND THE TRANSFORMATIVE POWER OF AI, THIS COLLECTION
      EXPLORES THE PROFOUND IMPACT OF AI PROCESSING ON THE HUMAN EXPERIENCE;
      AND THE DENATURING EFFECT OF RELENTLESS REPRODUCTION.
    </p>
    <button
      class="mt-4 p-2 bg-black text-white rounded-md hover:bg-red-700 ease-in duration-150">
      CLICK TO SEE CONCEPT AND PROCESS
    </button>
  </section>
  <section class="mt-10">
    <div
      class="grid gap-4 md:grid-cols-4 sm:grid-cols-2 bg-black p-10 rounded-lg shadow-2xl">
      <img
        class="rounded-lg"
        src="src/image/loremimage/cyborg look 2.webp"
        alt="" />
      <img
        class="rounded-lg"
        src="src/image/loremimage/beatrix face with stretch 1.webp"
        alt="" />
      <img
        class="rounded-lg"
        src="src/image/loremimage/CONTENT 1.webp"
        alt="" />
      <img
        class="rounded-lg"
        src="src/image/loremimage/lips 2.webp"
        alt="" />
      <img
        class="rounded-lg"
        src="src/image/loremimage/Monsterlook 1.webp"
        alt="" />
      <img
        class="rounded-lg"
        src="src/image/loremimage/Perrone, Grace, _Ai Matvey_ foam offcuts, lycra, denim, organza, 25_4_23 1.webp"
        alt="" />
      <img
        class="rounded-lg"
        src="src/image/loremimage/Perrone,Grace, _Monster_, foam offcuts, lycra, hair, upcycled shoes, latex, 15_5_23 1.webp"
        alt="" />
      <img
        class="rounded-lg"
        src="src/image/loremimage/Portfolio 14 1.webp"
        alt="" />
      <img
        class="rounded-lg"
        src="src/image/loremimage/Portfolio 19 1.webp"
        alt="" />
      <img
        class="rounded-lg"
        src="src/image/loremimage/tattoo wrap-Recovered_2080983 2.webp"
        alt="" />
    </div>
  </section>

  <section class="mt-40">
    <h1 class="text-4xl font-bold text-center">FURTHER</h1>
    <p class="text-base pt-2 font-semibold mt-10">
      CORE TO "LOREM IPSUM” IS AN INVESTIGATION OF HYPERREALITY AND
      SIMULACRA. THE DIGITAL REALM ‘MAKES SYNTHETIC’ OUR PHYSICAL REALITY
      THROUGH A META/PHYSICAL FEEDBACK LOOP, DIGITAL REPRESENTATIONS
      RE-ENTER THE ‘REAL WORLD’ AS COPIES OF COPIES, GRADUALLY ABSTRACTING
      OUR RELATIONSHIP TO NATURE. THIS INTERPLAY BETWEEN THE SYNTHETIC AND
      THE NATURAL CHALLENGES THE NOTIONS OF REALITY AND AUTHENTICITY,
      INVITING VIEWERS TO QUESTION THE CONSTRUCTED NATURE OF OUR ONLINE
      LIVES AND THE EPHEMERAL BOUNDARIES BETWEEN THE REAL AND THE SIMULATED
    </p>
    <p class="text-base pt-2 font-semibold mt-10">
      BRINGING THIS CONCEPT TO LIFE, THE SPRING SUMMER COLLECTION "LOREM
      IPSUM" FEATURES DIGITAL GARMENTS THAT EMBODY THE TRANSFORMATIVE
      EFFECTS OF AI PROCESSING. LEVERAGING ADVANCED SOFTWARE, DIGITAL
      MODELS, AND DIGITAL PATTERN CUTTING, THE COLLECTION PUSHES THE
      BOUNDARIES OF TRADITIONAL TEXTILES, EMBRACING THESE SOFTWARE'S
      POTENTIAL FOR INNOVATION. THROUGH THIS DIGITAL AND PHYSICAL SYNTHESIS,
      THE COLLECTION MANIFESTS ITS VISION, RESULTING IN TORTURED FORMS AND
      DISTORTED GRAPHICS, A COLLECTION LACED WITH THE ARTEFACTS OF ITS MODE
      OF PRODUCTION, GLITCHES PRESERVED AS EVIDENCE OF ITS DIGITAL ORIGIN.
    </p>
    <p class="text-base pt-2 font-semibold mt-10">
      THE COLLECTION CONSIDERS THE CLASHES, TENSIONS, AND CONSEQUENCES, OF
      LIVING IN AN AGE WHERE THE DISTINCTION BETWEEN THE REAL AND THE
      DIGITAL, THE ORIGINAL AND ITS REPRODUCTIONS, IS BECOMING EVERMORE
      UNCLEAR. IT REFLECTS THE METAMORPHOSIS OF OUR SUBJECTIVITY AS WE
      NAVIGATE A WORLD OF CURATED ONLINE PROFILES, CONSTRUCTED
      SELF-MYTHOLOGIES, UBIQUITOUS ARTIFICE AND AUTO-OBSERVATION. IT
      EMPHASISES THE DYSPHORIA THAT’S BORN OF THESE DISPARITIES, BETWEEN THE
      IDENTITIES WE CURATE AND THE INEVITABLE CONTRADICTIONS THAT COME
      COMPLEMENTARY TO BEING HUMAN. IN ESSENCE, “LOREM IPSUM” EXEMPLIFIES
      THE PAIN ITSELF, INNATE TO THE NETWORKED SELF, TO ORGANIC BEINGS
      EXISTING IN A POST-DIGITAL WORLD.
    </p>
  </section>
  <section>
    <div class="flex justify-center">
      <img src="src/image/Layer 93 3.webp" alt="" />
    </div>
    <div class="mt-40">
      <h1 class="text-4xl font-bold text-center">GALLERY</h1>

      <div
        class="mt-10 grid gap-4 md:grid-cols-3 sm:grid-cols-2 bg-black rounded-lg p-10 shadow-2xl">
        <img
          class="rounded-lg"
          src="src/image/loremimage/gallery/MG_0113 3.webp"
          alt="" />
        <img
          class="rounded-lg"
          src="src/image/loremimage/gallery/DSC_1955 Large 1.webp"
          alt="" />
        <img
          class="rounded-lg"
          src="src/image/loremimage/gallery/graphittimat 1.webp"
          alt="" />
        <img
          class="rounded-lg"
          src="src/image/loremimage/gallery/matveytwin 1.webp"
          alt="" />
        <img
          class="rounded-lg"
          src="src/image/loremimage/gallery/post 2.webp"
          alt="" />
      </div>
    </div>
  </section>
    `;
  });