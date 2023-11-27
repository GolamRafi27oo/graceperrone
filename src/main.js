let page = document.getElementById("pages");
let loren = document.getElementById("loren");
let navbar = document.getElementById("navbar");
let lorennav = document.getElementById("lorennav");
let oroborus = document.getElementById("OROBORUS");
let oroborusnav = document.getElementById("OROBORUSNAV");
let lillustration = document.getElementById("ILLUSTRATION");
let lillustrationav = document.getElementById("ILLUSTRATIONAV");
let grace = document.getElementById("grace");
let backimg = document.getElementById("backimg");
let ring = document.getElementById("ring");

grace.addEventListener("mouseover", function () {
  backimg.style.backgroundImage = 'url("src/image/ghostlimage.png")';
});
grace.addEventListener("mouseout", function () {
  backimg.style.backgroundImage = 'url("src/image/background.png")';
});

function hover(img) {
  img.src = "src/image/ghostlimage.png";
}
function hoverOut(img) {
  img.src = "src/image/ring.png";
}

let navfun = function () {
  navbar.classList.remove("hidden");
  let memu = document.getElementById("menu");
  let count = 0;
  navbar.addEventListener("click", function () {
    count++;
    if (count % 2 != 0) {
      memu.classList.remove("hidden");
    } else {
      memu.classList.add("hidden");
    }
  });
};

let lorenfun = function () {
  navfun();
  navbar.classList.remove("right-52");
  page.innerHTML = `
  <section>
  <section class="mt-40 ">
    <div class="grid md:grid-cols-2 items-center m-2">
      <div>
        <h1 class="md:text-4xl text-2xl font-bold">LOREM IPSUM:</h1>
        <h1 class="md:text-2xl text-xl font-bold pt-2">
          UNVEILING THE HYPERREAL SIMULACRA
        </h1>
        <p class="smd:text-sm text-xs pt-2 font-bold">
          "LOREM IPSUM" IS CONCERNED WITH THE UNIQUE INTERACTIONS BETWEEN GEN-Z
          AND THE INTERNET, WHERE THE BOUNDARIES BETWEEN REALITY AND SIMULATION
          ARE BECOMING INCREASINGLY BLURRED. INSPIRED BY DELEUZES’ “DIFFERENCE &
          REPETITION” AND THE TRANSFORMATIVE POWER OF AI, THIS COLLECTION
          EXPLORES THE PROFOUND IMPACT OF AI PROCESSING ON THE HUMAN EXPERIENCE;
          AND THE DENATURING EFFECT OF RELENTLESS REPRODUCTION.
        </p>
      </div>
      <div>
        <ul class="flex justify-center items-center p-2">
          <li id="concept" class=" p-2" ><img id="ring" src="src/image/ring.png" onmouseover="hover(this);" onmouseout="hoverOut(this)" alt=""></li>
          <li class=" p-2"><img src="src/image/Arrow 1.png" alt=""></li>
          <li class=" p-2 uppercase font-semibold text-[#A49B9B]">CLICK TO SEE Concept and Process</li>
        </ul>
      </div>
    </div>
  </section>
  <section class="mt-10 m-2">
  <div class="flex justify-center">
   <img class="bg-cover w-[100%] block" src="src/image/loremimage/back.png" alt="">
  </div>
 
  
  
  <!--
    <div class="grid grid-cols-2">
      <div class="grid grid-cols-1 place-items-end">
        <div>
          <img class="md:h-[90vh] md:w-[60vh]" src="src/image/loremimage/Monsterlook 1.png" alt="">
          <img class="md:h-[90vh] md:w-[60vh]" src="src/image/loremimage/Portfolio 14 1.png" alt="">
          <img class="md:h-[90vh] md:w-[60vh]" src="src/image/loremimage/cyborg look 2.png" alt="">
          <img class="md:h-[90vh] md:w-[60vh]" src="src/image/loremimage/beatrix.png" alt="">
          <img class="md:h-[90vh] md:w-[60vh]" src="src/image/loremimage/matvey.png" alt="">
        </div>
      </div>
      <div>
        <div class="grid grid-cols-1 place-items-start">
          <img class="md:h-[90vh] md:w-[60vh]" src="src/image/loremimage/Group 3.png" alt="">
          <img class="md:h-[90vh] md:w-[60vh]" src="src/image/loremimage/Group 7.png" alt="">
          <img class="md:h-[90vh] md:w-[60vh]" src="src/image/loremimage/Group 4.png" alt="">
          <img class="md:h-[90vh] md:w-[60vh]" src="src/image/loremimage/Group 5.png" alt="">
          <img class="md:h-[90vh] md:w-[60vh]" src="src/image/loremimage/Group 6.png" alt="">
        </div>
      </div>
    </div>
    <div class="flex justify-center ">
      <img class="md:w-[20vh] w-[10vh]  md:-translate-y-20 -translate-y-10" src="src/image/ring.png" alt="">

    </div>

  </section>

  <section class="mt-40 font-bold m-2">
    <h1 class="text-4xl  text-center text-[#A49B9B]">FURTHER</h1>
    <p class="text-sm pt-2 mt-10">
      CORE TO "LOREM IPSUM” IS AN INVESTIGATION OF HYPERREALITY AND
      SIMULACRA. THE DIGITAL REALM ‘MAKES SYNTHETIC’ OUR PHYSICAL REALITY
      THROUGH A META/PHYSICAL FEEDBACK LOOP, DIGITAL REPRESENTATIONS
      RE-ENTER THE ‘REAL WORLD’ AS COPIES OF COPIES, GRADUALLY ABSTRACTING
      OUR RELATIONSHIP TO NATURE. THIS INTERPLAY BETWEEN THE SYNTHETIC AND
      THE NATURAL CHALLENGES THE NOTIONS OF REALITY AND AUTHENTICITY,
      INVITING VIEWERS TO QUESTION THE CONSTRUCTED NATURE OF OUR ONLINE
      LIVES AND THE EPHEMERAL BOUNDARIES BETWEEN THE REAL AND THE SIMULATED
    </p>
    <p class="text-sm   pt-2  mt-10">
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
    <p class="text-sm pt-2 mt-10">
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
    <div class="flex justify-center mt-10">
      <img class="w-[40vh]" src="src/image/Layer 93 3.webp" alt="" />
    </div>
    <div class="mt-40">
      <h1 class="text-[#A49B9B] text-4xl font-bold text-center">GALLERY</h1>
      <div
        class="mt-10 grid gap-4 md:grid-cols-3 sm:grid-cols-2 justify-center items-center">
        <img
          src="src/image/loremimage/gallery/MG_0113 3.webp"
          alt="" />
        <img
          src="src/image/loremimage/gallery/DSC_1955 Large 1.webp"
          alt="" />
        <img
          src="src/image/loremimage/gallery/graphittimat 1.webp"
          alt="" />
        <img
          src="src/image/loremimage/gallery/matveytwin 1.webp"
          alt="" />
        <img
          src="src/image/loremimage/gallery/post 2.webp"
          alt="" />
      </div>
    </div>
    </section>
    -->
  </section>
    `;

  let concept = document.getElementById("concept");
  concept.addEventListener("click", function () {
    navbar.classList.add("right-52");
    page.innerHTML = `
      <div class="mt-10">
        <h1 class="md:text-4xl text-2xl font-bold m-2">CONCEPT</h1>
        <h1 class="md:text-2xl font-bold pt-2 m-2">LOREM IPSUM:</h1>
        <div>
          <img
            class="mt-20 bg-cover w-[100%] block"
            src="src/image/loremimage/concept/emphasises the Dysphoria.png"
            alt="" />
        </div>

        <div class=" m-2 p-10 border-l-black border-l-4 ">
          <section class="grid md:grid-cols-2 grid-cols-1">
            <div>
              <ul class="flex items-center">
                <li class="text-4xl text-red-700 p-2 flex justify-center">
                  <i class="fa-solid fa-1"></i>
                </li>
                <li class="md:text-2xl font-bold -translate-x-2 -translate-y-2">
                  FIND A CURATED IDENTITY
                </li>
              </ul>
              <img
                src="src/image/loremimage/concept/IMG_5899 1.webp"
                alt="" />
            </div>
            <div
              class="md:ml-10 border-red-700 border-4 p-4 flex items-center md:mt-0 mt-5">
              <div>
                <h1 class="md:text-4xl text-2xl font-bold">
                  CAN I TAKE YOUR PICTURE?
                </h1>
                <h1 class="md:text-2xl">
                  HOW TO MAKE A COLLECTION ABOUT INTERNET DYSPHORIA
                </h1>
              </div>
            </div>
          </section>
          <section class="grid md:grid-cols-2 grid-cols-1 mt-40 items-center">
            <div>
              <ul class="flex items-center">
                <li class="text-4xl text-red-700 p-2 flex justify-center">
                  <i class="fa-solid fa-2"></i>
                </li>
                <li class="md:text-2xl font-bold -translate-x-2 -translate-y-2">
                  ORDER PHYSICAL SAMPLE DISTORT
                </li>
              </ul>
            </div>
            <div>
              <img
                src="src/image/loremimage/concept/page from page.webp"
                alt="" />
            </div>
          </section>

          <section class="grid md:grid-cols-2 grid-cols-1 mt-40 items-center">
            <div>
              <ul class="flex items-center">
                <li class="text-4xl text-red-700 p-2 flex justify-center">
                  <i class="fa-solid fa-3"></i>
                </li>
                <li class="md:text-2xl font-bold -translate-x-2 -translate-y-2">
                  CONSTRUCT DIGITAL TWIN
                </li>
              </ul>
            </div>
            <div>
              <img
                src="src/image/loremimage/concept/7DAE3680.webp"
                alt="" />
            </div>
          </section>

          <section
            class="grid md:grid-cols-2 grid-cols-1 mt-40 items-center mb-40">
            <div>
              <ul class="flex items-center">
                <li class="text-4xl text-red-700 p-2 flex justify-center">
                  <i class="fa-solid fa-4"></i>
                </li>
                <li class="md:text-2xl font-bold -translate-x-2 -translate-y-2">
                  ARRANGE DIGITAL PATTERNS ON LASERCUT BED SIZED PANELS
                </li>
              </ul>
            </div>
            <div>
              <img
                src="src/image/loremimage/concept/Your paragraph text (1).webp"
                alt="" />
            </div>
          </section>
        </div>
        <section
          class="grid md:grid-cols-2 grid-cols-1 items-center mb-40 -translate-y-2">
          <div>
            <img
              src="src/image/loremimage/concept/MG_0107 2.webp"
              alt="" />
          </div>
          <div>
          <ul class="flex items-center">
          <li class="text-4xl text-red-700 p-2 flex justify-center">
            <i class="fa-solid fa-5"></i>
            </li>
            <li class="md:text-2xl font-bold -translate-x-2 -translate-y-2">
            LASERCUT PHYSICAL PATTERNS AND CONSTRUCT
            </li>
           </ul>
          </div>
        </section>
      </div>
        `;
  });
};

let ourobofun = function () {
  navfun();
  navbar.classList.add("right-52");
  page.innerHTML = `
  <div>
  <section class="grid md:grid-cols-2 items-center font-semibold">
    <div>
      <img
        class="mb-1"
        src="src/image/OUROBOROS/oroboruslook1 1.png"
        alt="" />
    </div>
    <div>
      <div class="text-left">
        <ul class="list-disc ml-10">
          <li>Coral Bleaching</li>
          <li>Corsetry</li>
          <li>Symbiosis</li>
          <li>Scaffoiding</li>
          <li>Shibari</li>
        </ul>
        <ul class="ml-5 mt-5">
          <p>
            “OUROBOROS EXPRESSES THE UNITY OF ALL THINGS, MATERIAL AND
            SPIRITUAL, WHICH NEVER DISAPPEARS BUT PERPETUALLY CHANGES FORM
            IN AN ETERNAL CYCLE OF DESTRUCTION AND RE-CREATION’
          </p>
        </ul>
        <ul class="flex justify-center">
          <img class="w-[30vh]" src="src/image/Layer 93 3.webp" alt="" />
        </ul>
      </div>
    </div>
    <div class="mt-20">
      <img class="mb-1" src="src/image/OUROBOROS/IMG_4747 1.png" alt="" />
      <img
        class="mb-1"
        src="src/image/OUROBOROS/IMG_4748 (3) 1.png"
        alt="" />
    </div>
  </section>
  <section>
    <section class="grid grid-cols-2 gap-2">
      <div>
        <img
          class="mb-1"
          src="src/image/OUROBOROS/IMG_4897 1.png"
          alt="" />
      </div>
      <div>
        <img
          class="mb-1"
          src="src/image/OUROBOROS/IMG_1483 1.png"
          alt="" />
        <p>
          Zooxanthellae is the microscopic algae which pigments coral, the
          two organisms are reliant on each other for survival. because
          the algae does not have the capacity to handle large
          fluctuations in temperature, the organism dies stripping the
          coral of its colour. This effect is called coral bleaching, a
          name that implies the sterilisation of nature.
        </p>
      </div>
    </section>
    <section class="mt-20">
      <img class="bg-cover w-[100%] block" src="src/image/OUROBOROS/galleryoroborus.png" alt="" />
    </section>
  </section>
</div>
  `;
};

let lillustrafun = function () {
  navfun();
  page.innerHTML = `
  <section class="m-2">
  <div class="flex justify-center items-center">
    <div class="text-center">
      <h1 class="md:text-4xl text-2xl font-bold">ILLUSTRATION</h1>
      <div class="shadow-white shadow-2xl shadow- rounded-[50%]">
        <img class="mt-10" src="src/image/ILLUSTRATION/doll.png" alt="" />
      </div>
    </div>
  </div>
  <div class="flex justify-end md:mr-[10%]">
    <img class="max-lg:hidden" src="src/image/ILLUSTRATION/leg.png" alt="" />
  </div>
  <div class="lg:-translate-y-[500px] md:w-[90vh] lg:ml-[10%] max-lg:mt-10">
    <h1 class="lg:text-6xl md:text-4xl text-2xl text-[#766FB2] font-bold">
      POST-HUMAN WORLD BUILDING
    </h1>
    <p class="md:text-lg text-base font-bold">
       My work is born out of an imagined Post-Human world which considers the
      clashes, tensions, and consequences, of living in an age where the
      distinction between the real and the digital, the original and its
      reproductions, is becoming evermore unclear. Essential Post-Human
      questions include considerations of where our bodies stop given our
      ever-dependant relationship with technology, and imagining a scenario and
      creating for that.  I consider the roles, human or automated, people in
      the future may take. For example, if someone is a nomad what tools would
      they need, and how would they make use of the resources would they have?
    </p>
  </div>
  <div class="lg:-translate-y-[500px]">
    <img src="src/image/ILLUSTRATION/ILLUSTRATION.png" alt="" />
    <div class="flex justify-center">
      <img class="mt-40 " src="src/image/ILLUSTRATION/glry.png" alt="" />
    </div>
    <img class="mt-40 bg-cover w-[100%] block" src="src/image/ILLUSTRATION/grap.png" alt="" />
  </div>
</section>
  `;
};

loren.addEventListener("click", function () {
  console.log("clicked");
  lorenfun();
});
lorennav.addEventListener("click", function () {
  lorenfun();
});

oroborus.addEventListener("click", function () {
  ourobofun();
});
oroborusnav.addEventListener("click", function () {
  ourobofun();
});



lillustration.addEventListener("click", function () {
  lillustrafun();
});
lillustrationav.addEventListener("click", function () {
  lillustrafun();
});

