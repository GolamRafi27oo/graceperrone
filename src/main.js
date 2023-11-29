let page = document.getElementById("pages");
let loren = document.getElementById("loren");
let navbar = document.getElementById("navbar");
let lorennav = document.getElementById("lorennav");
let oroborus = document.getElementById("OROBORUS");
let oroborusnav = document.getElementById("OROBORUSNAV");
let lillustration = document.getElementById("ILLUSTRATION");
let lillustrationav = document.getElementById("ILLUSTRATIONAV");
let backimg = document.getElementById("backimg");
let ring = document.getElementById("ring");
let glitch = document.getElementById("glitch");
let glitchnav = document.getElementById("glitchnav");
let styling = document.getElementById("styling");
let stylingnav = document.getElementById("stylingnav");
let textile = document.getElementById("textile");
let textilenav = document.getElementById("textilenav");
let graceImg = document.getElementById("graceImg");
let grace = document.getElementById("grace");
let gracenav = document.getElementById("gracenav");


graceImg.addEventListener("mouseover", function () {
  backimg.style.backgroundImage = 'url("src/image/ghostlimage.png")';
});
graceImg.addEventListener("mouseout", function () {
  backimg.style.backgroundImage = 'url("src/image/background.png")';
});

function hover(img) {
  img.src = "src/image/ring2.png";
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
  navbar.classList.remove("right-52");
  page.innerHTML = `
  <section class="m-2">
  <div class="flex justify-center items-center">
    <div class="text-center">
      <h1 class="md:text-4xl text-2xl font-bold">ILLUSTRATION</h1>
      <div class="shadow-white shadow-2xl shadow- rounded-[50%]">
        <img class="mt-10 max-xl:w-[60vh]" src="src/image/ILLUSTRATION/doll.png" alt="" />
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

let glitchfun = function () {
  navfun();
  navbar.classList.remove("right-52");
  page.innerHTML = `
  <section>
  <div class="flex justify-center font-bold md:text-4xl text-2xl mt-16">
    <h1 class="flex text-center justify-center">Glitch work</h1>
    <h1 id="back" class="absolute text-6xl right-10 cursor-pointer"><</h1>
  </div>
  <section id="Glitchin">
    <div class="mt-20 flex justify-center w-[100%]">
      <div class="grid grid-cols-2 gap-2 cursor-pointer">
        <img
          id="g1"
          class="hover:brightness-50 hover:bg-gray-400"
          src="src/image/gitchwork/Group 2.png"
          alt="" />
        <img
          id="g2"
          class="hover:brightness-50 hover:bg-gray-400"
          src="src/image/gitchwork/Group 6.png"
          alt="" />
        <img
          id="g3"
          class="hover:brightness-50 hover:bg-gray-400"
          src="src/image/gitchwork/Group 4.png"
          alt="" />
        <img
          id="g4"
          class="hover:brightness-50 hover:bg-gray-400"
          src="src/image/gitchwork/Group 5.png"
          alt="" />
        <img
          id="g5"
          class="hover:brightness-50 hover:bg-gray-400"
          src="src/image/gitchwork/Group 3.png"
          alt="" />
        <img
          id="g6"
          class="hover:brightness-50 hover:bg-gray-400"
          src="src/image/gitchwork/Group 1.png"
          alt="" />
      </div>
    </div>
    <div
      class="mt-20 flex justify-center uppercase md:text-xl font-bold md:translate-y-20">
      <h1
        id="digital"
        class="bg-black text-white p-2 rounded-full cursor-pointer">
        see digital fasion
      </h1>
    </div>
  </section>
</section>
  `;
  let Glitchin = document.getElementById("Glitchin");
  let back = document.getElementById("back");

  document.getElementById("g1").addEventListener("click", function () {
    back.classList.add("left-10");
    navbar.classList.add("right-52");

    Glitchin.innerHTML = `
    <section id="Glitch">
      <div class=" mt-10 flex justify-center w-[100%]">
        <img src="src/image/gitchwork/g1.png" alt="">
      </div>
    </section>
    `;
  });

  document.getElementById("g2").addEventListener("click", function () {
    back.classList.add("left-10");
    navbar.classList.add("right-52");

    Glitchin.innerHTML = `
    <section id="Glitch">
      <div class=" mt-10 flex justify-center w-[100%]">
        <img src="src/image/gitchwork/g2.png" alt="">
      </div>
    </section>
    `;
  });

  document.getElementById("g3").addEventListener("click", function () {
    back.classList.add("left-10");
    navbar.classList.add("right-52");

    Glitchin.innerHTML = `
    <section id="Glitch">
      <div class=" mt-10 flex justify-center w-[100%]">
        <img src="src/image/gitchwork/g3.png" alt="">
      </div>
    </section>
    `;
  });

  document.getElementById("g4").addEventListener("click", function () {
    back.classList.add("left-10");
    navbar.classList.add("right-52");

    Glitchin.innerHTML = `
    <section id="Glitch">
      <div class=" mt-10 flex justify-center w-[100%]">
        <img src="src/image/gitchwork/g4.png" alt="">
      </div>
    </section>
    `;
  });

  document.getElementById("g5").addEventListener("click", function () {
    back.classList.add("left-10");
    navbar.classList.add("right-52");

    Glitchin.innerHTML = `
    <section id="Glitch">
      <div class=" mt-10 flex justify-center w-[100%]">
        <img src="src/image/gitchwork/g5.png" alt="">
      </div>
    </section>
    `;
  });

  document.getElementById("g6").addEventListener("click", function () {
    back.classList.add("left-10");
    navbar.classList.add("right-52");

    Glitchin.innerHTML = `
    <section id="Glitch">
    <div class="grid md:grid-cols-2 mt-10 w-[100%]">
      <div>
        <img src="src/image/gitchwork/g6.png" alt="" />
      </div>
      <div class="text-center text-4xl font-bold">
        <h1>Heaven</h1>
        <h2 class="text-2xl">Album art</h2>
        <p class="text-left font-medium md:text-xl text-lg md:mt-[300px]">
          <a class="underline underline-offset-1" href="https://www.instagram.com/dvstrr__/" target="_blank">@dvstrr__</a>
          delivers two electro spiritualist tracks for Goblin House records. The
          A-Side ‘Ocean’ sounds like the load screen after the bright light boss
          fight, whereas the B-Side ‘Split Skull’ should scratch the urge any
          sadists might’ve had for field recordings of the seventh layer.
        </p>
      </div>
    </div>
  </section>
    `;
  });

  back.addEventListener("click", function () {
    navbar.classList.remove("right-52");
    glitchfun();
  });
};

let stylingfun = function () {
  navfun();
  page.innerHTML = `
  <section>
  <div class="justify-center font-bold">
    <div class="ml-10">
      <img
        id="styimg"
        class="bg-cover w-[100%] block"
        src="src/image/styling/Group 22.png"
        alt="" />
    </div>
  </div>
  <section id="styling">
    <div
      class="uppercase flex justify-center md:text-6xl text-4xl font-bold text-[#A49B9B]">
      <div class="text-center">
        <img src="src/image/Layer 93 3.webp" alt="" />
        <h1>Gallery</h1>
      </div>
    </div>
    <div class="p-10 flex justify-center w-[100%]">
      <div class="grid gap-2 grid-cols-3 mt-10">
        <img
          id="x1"
          class="hover:brightness-50"
          src="src/image/styling/gallary/g1.png"
          alt="" />
        <img
          id="x2"
          class="hover:brightness-50"
          src="src/image/styling/gallary/g2.png"
          alt="" />
        <img
          id="x3"
          class="hover:brightness-50"
          src="src/image/styling/gallary/galleryimage-8.png"
          alt="" />
        <img
          id="x4"
          class="hover:brightness-50"
          src="src/image/styling/gallary/g3.png"
          alt="" />
        <img
          id="x5"
          class="hover:brightness-50"
          src="src/image/styling/gallary/g4.png"
          alt="" />
        <img
          id="x6"
          class="hover:brightness-50"
          src="src/image/styling/gallary/galleryimage-7.png"
          alt="" />
        <img
          id="x7"
          class="hover:brightness-50"
          src="src/image/styling/gallary/g5.png"
          alt="" />
        <img
          id="x8"
          class="hover:brightness-50"
          src="src/image/styling/gallary/g6.png"
          alt="" />
        <img
          id="x9"
          class="hover:brightness-50"
          src="src/image/styling/gallary/galleryimage-5.png"
          alt="" />
        <img
        id="x10"
          class="hover:brightness-50"
          src="src/image/styling/gallary/g7.png"
          alt="" />
        <img
          id="x11"
          class="hover:brightness-50"
          src="src/image/styling/gallary/g8.png"
          alt="" />
        <img
          id="x12"
          class="hover:brightness-50"
          src="src/image/styling/gallary/galleryimage.png"
          alt="" />
        <img
          id="x13"
          class="hover:brightness-50"
          src="src/image/styling/gallary/g9.png"
          alt="" />
        <img
          id="x14"
          class="hover:brightness-50"
          src="src/image/styling/gallary/g10.png"
          alt="" />
        <img
          id="x15"
          class="hover:brightness-50"
          src="src/image/styling/gallary/galleryimage-2.png"
          alt="" />
      </div>
    </div>
    <div class="flex justify-center">
      <div>
        <div class="flex justify-center">
          <img src="src/image/Layer 93 3.webp" alt="" />
        </div>
        <div class="m-10">
          <img id="field" src="src/image/styling/gallary/field1.png" alt="" />
        </div>
      </div>
    </div>
  </section>
</section>
`;

  styimg.addEventListener("mouseover", function () {
    styimg.src = "src/image/styling/Group 24.png";
  });

  styimg.addEventListener("mouseout", function () {
    styimg.src = "src/image/styling/Group 22.png";
  });

  let field = document.getElementById("field");
  field.addEventListener("mouseover", function () {
    field.src = "src/image/styling/gallary/field2.png";
  });

  field.addEventListener("mouseout", function () {
    field.src = "src/image/styling/gallary/field1.png";
  });

  styimg.addEventListener("click", function () {
    window.scrollTo(0, 0);
    navbar.classList.add("right-52");
    page.innerHTML = `
    <section>
    <div id="back" class="text-6xl p-4 cursor-pointer">
      <
    </div>
    <div class="grid md:grid-cols-2 mt-10 w-[100%]">
      <div>
        <img src="src/image/styling/7CD712DB.png" alt="" />
      </div>
      <div class="text-center md:text-4xl text-2xl font-bold">
        <h1>Kavari Promotional</h1>
        <p class="text-left font-medium md:text-xl text-lg md:mt-[500px]">Photographer
          <a class="underline underline-offset-1" href="https://www.instagram.com/alexbenecki/" target="_blank">@alexbenecki</a>
        </p>
      </div>
    </div>
  </section>
  `;

    let back = document.getElementById("back");
    back.addEventListener("click", function () {
      backbutton();
    });
  });

  let xx1 = function () {
    window.scrollTo(0, 0);
    navbar.classList.add("right-52");
    page.innerHTML = `
      <section class="m-10">
        <div id="back" class="text-6xl p-4 cursor-pointer">
          <
        </div>
        <div class="grid md:grid-cols-2 mt-10 w-[100%]">
          <div>
            <img src="src/image/styling/Group 1 (2).png" alt="" />
          </div>
          <div class="text-center md:text-4xl text-2xl font-bold">
            <h1>Kavari Promotional</h1>
            <p class="text-left font-medium md:text-xl text-lg  md:mt-[300px]">Model:
              
              <a class="underline underline-offset-1" href="https://www.instagram.com/oscryung/" target="_blank">@oscryungAgency</a>
              <a class="underline underline-offset-1" href="https://www.instagram.com/coloursagency/" target="_blank">@coloursagency:</a>
              <br>
              Photographer:
              <a class="underline underline-offset-1" href="https://www.instagram.com/margaritakalmikova/" target="_blank">@margaritakalmikova.</a>
            </p>
          </div>
        </div>
      </section>
    `;

    let back = document.getElementById("back");
    back.addEventListener("click", function () {
      backbutton();
    });
  };

  document.getElementById("x1").addEventListener("click", function () {
    xx1();
  });

  document.getElementById("x7").addEventListener("click", function () {
    xx1();
  });

  document.getElementById("x2").addEventListener("click", function () {
    window.scrollTo(0, 0);
    navbar.classList.add("right-52");
    page.innerHTML = `
  
    <section class="m-10"> 
    <div id="back" class="text-6xl p-4 cursor-pointer">
      <
    </div>
    <div>
      <img class="w-[100%] block" src="src/image//styling/Group 16 (1).png" alt="" />
    </div>
  </section>
  `;

    let back = document.getElementById("back");
    back.addEventListener("click", function () {
      backbutton();
    });
  });

  let xx3 = function () {
    window.scrollTo(0, 0);
    navbar.classList.add("right-52");
    page.innerHTML = `

    <section class="m-10"> 
    <div id="back" class="text-6xl p-4 cursor-pointer">
      <
    </div>
    <div class="grid md:grid-cols-2 mt-10 w-[100%]">
      <div>
        <img src="src/image/styling/Group 1 (3).png" alt="" />
      </div>
      <div class="text-left md:text-4xl text-2xl font-bold md:ml-10">
        <h1 class="w-72">Kavari for Ethel Cain’s freezer bride tour</h1>
        <p class="text-left font-medium md:text-xl text-lg  md:mt-[300px]">This was a moment I was incredibly proud of; I made this piece for  
          <a class="underline underline-offset-1" href="https://www.instagram.com/kavari_____/" target="_blank">@kavari_____</a> when she supported 
          <a class="underline underline-offset-1" href="https://www.instagram.com/mothercain/"@mothercain</a>
          this December. Pics by
          <a class="underline underline-offset-1" href="https://www.instagram.com/spit.ting/" target="_blank">@spit.ting</a>
        </p>
      </div>
    </div>
  </section>
  `;

    let back = document.getElementById("back");
    back.addEventListener("click", function () {
      backbutton();
    });
  };

  document.getElementById("x3").addEventListener("click", function () {
    xx3();
  });
  document.getElementById("x6").addEventListener("click", function () {
    xx3();
  });
  document.getElementById("x9").addEventListener("click", function () {
    xx3();
  });

  document.getElementById("x4").addEventListener("click", function () {
    window.scrollTo(0, 0);
    navbar.classList.add("right-52");
    page.innerHTML = `
  
    <section class="m-10"> 
    <div id="back" class="text-6xl p-4 cursor-pointer">
      <
    </div>
    <div>
      <img src="src/image//styling/Group 16 (1).png" alt="" />
    </div>
  </section>
  `;

    let back = document.getElementById("back");
    back.addEventListener("click", function () {
      backbutton();
    });
  });

  document.getElementById("x5").addEventListener("click", function () {
    window.scrollTo(0, 0);
    navbar.classList.add("right-52");
    page.innerHTML = `
  
    <section class="m-10"> 
    <div id="back" class="text-6xl p-4 cursor-pointer">
      <
    </div>
    <div class="grid md:grid-cols-2 mt-10 w-[100%]">
      <div>
        <img src="src/image/styling/8061AE07.png" alt="" />
      </div>
      <div class="text-left md:text-4xl text-2xl font-bold md:ml-10 uppercase">
        <h1>ribbon dress</h1>
        <h1>for etherial club kids</h1>
        <h1>Dress by me </h1>
        <p class="text-left font-medium md:text-xl text-lg  md:mt-[300px]">This was a moment I was incredibly proud of; I made this piece for  
          <a class="underline underline-offset-1" href="https://www.instagram.com/kavari_____/" target="_blank">Photographer 
          <a class="underline underline-offset-1" href="https://www.instagram.com/alexbenecki/ target="_blank">@alexbenecki</a>
        </p>
      </div>
    </div>
  </section>
  `;

    let back = document.getElementById("back");
    back.addEventListener("click", function () {
      backbutton();
    });
  });

  document.getElementById("x8").addEventListener("click", function () {
    window.scrollTo(0, 0);
    navbar.classList.add("right-52");
    page.innerHTML = `
    <section>
    <div id="back" class="text-6xl p-4 cursor-pointer">
      <
    </div>
    <div class="grid md:grid-cols-2 mt-10 w-[100%]">
      <div>
        <img src="src/image/styling/7CD712DB.png" alt="" />
      </div>
      <div class="text-center md:text-4xl text-2xl font-bold">
        <h1>Kavari Promotional</h1>
        <p class="text-left font-medium md:text-xl text-lg md:mt-[500px]">Photographer
          <a class="underline underline-offset-1" href="https://www.instagram.com/alexbenecki/" target="_blank">@alexbenecki</a>
        </p>
      </div>
    </div>
  </section>
  `;

    let back = document.getElementById("back");
    back.addEventListener("click", function () {
      backbutton();
    });
  });

  let xx10 = function () {
    window.scrollTo(0, 0);
    navbar.classList.add("right-52");
    page.innerHTML = `
    <section class="m-10"> 
    <div id="back" class="text-6xl p-4 cursor-pointer">
      <
    </div>
    <div class="grid md:grid-cols-2 mt-10 w-[100%]">
      <div>
        <img src="src/image/styling/dfgerg.png" alt="" />
      </div>
      <div class="text-left md:text-4xl text-2xl font-bold md:ml-10 uppercase">
        <h1 class="text-3xl">FW19</h1>
        <h1 class="text-4xl">campaign </h1>
        <h1>The great put on </h1>
        <h1 class="text-base">Marthas vineyard MV</h1>
        <p class="text-left font-medium md:text-xl text-lg  md:mt-[300px]">Photographer
          <a class="underline underline-offset-1" href="https://www.instagram.com/thegreatputonmv/" target="_blank">@bennettsandefur</a> 
          <br>
          luxury items sourced from 
          <a class="underline underline-offset-1" href="https://www.instagram.com/thegreatputonmv/" target="_blank">@thegreatputonmv</a>
        </p>
      </div>
    </div>
  </section>
  `;

    let back = document.getElementById("back");
    back.addEventListener("click", function () {
      backbutton();
    });
  };
  document.getElementById("x10").addEventListener("click", function () {
    xx10();
  });
  document.getElementById("x11").addEventListener("click", function () {
    xx10();
  });
  document.getElementById("x12").addEventListener("click", function () {
    xx10();
  });
  document.getElementById("x14").addEventListener("click", function () {
    xx10();
  });
  document.getElementById("x15").addEventListener("click", function () {
    xx10();
  });

  document.getElementById("x13").addEventListener("click", function () {
    window.scrollTo(0, 0);
    navbar.classList.add("right-52");
    page.innerHTML = `
    <section class="m-10"> 
    <div id="back" class="text-6xl p-4 cursor-pointer">
      <
    </div>
    <div>
      <img src="src/image//styling/sdgaer.png" alt="" />
    </div>
  </section>
  `;

    let back = document.getElementById("back");
    back.addEventListener("click", function () {
      backbutton();
    });
  });

  let backbutton = function () {
    navbar.classList.remove("right-52");
    stylingfun();
    window.scrollTo(0, 0);
  };
};

let innovafun = function(){
  navbar.classList.remove("right-52");
  navfun();
  page.innerHTML = `
  <section>
  <div>
    <img
      class="w-[100%]"
      src="src/image/MATERIAL INNOVATION/Group 1 (4).png"
      alt="" />
  </div>
  <div class="flex justify-center items-center mt-20">
    <div class="grid grid-cols-2 gap-10 p-10">
      <img id="ino1" src="src/image/MATERIAL INNOVATION/woodlace 2 1.png" alt="" />
      <img src="src/image/MATERIAL INNOVATION/lasercutwood 1.png" alt="" />
      <img src="src/image/MATERIAL INNOVATION/Layer 3 1.png" alt="" />
      <img id="ino2" src="src/image/MATERIAL INNOVATION/Layer 4 2.png" alt="" />
      <img src="src/image/MATERIAL INNOVATION/boro 1.png" alt="" />
      <img id="ino3" src="src/image/MATERIAL INNOVATION/hair 2.png" alt="" />
    </div>
  </div>
  <div class="mt-10 justify-center flex">
    <img
      class="max-md:w-[30vh]"
      src="src/image/MATERIAL INNOVATION/treyfullbusiness 1.png"
      alt="" />
  </div>
</section>
  `

  let ino1 = document.getElementById("ino1");

  ino1.addEventListener("mouseover", function () {
    ino1.src = "src/image/MATERIAL INNOVATION/woodlace 2.png";
  });

  ino1.addEventListener("mouseout", function () {
    ino1.src = "src/image/MATERIAL INNOVATION/woodlace 2 1.png";
  });

  let ino2 = document.getElementById("ino2");

  ino2.addEventListener("mouseover", function () {
    ino2.src = "src/image/MATERIAL INNOVATION/Layer 5 1.png";
  });

  ino2.addEventListener("mouseout", function () {
    ino2.src = "src/image/MATERIAL INNOVATION/Layer 4 2.png";
  });

  let ino3 = document.getElementById("ino3");

  ino3.addEventListener("mouseover", function () {
    ino3.src = "src/image/MATERIAL INNOVATION/Layer 6 1.png";
  });

  ino3.addEventListener("mouseout", function () {
    ino3.src = "src/image/MATERIAL INNOVATION/hair 2.png";
  });
}

let gracefun = function(){
  backimg.style.backgroundImage = 'url("src/image/background.png")';
  navbar.classList.add("right-52");
  navfun()
  page.innerHTML = `
  <section>
  <div>
    <img class="w-[100%]" src="src/image/gracehome/gracehome.png" alt="" />
  </div>
  <div>
    <div class="grid sm:grid-cols-2 gap-10">
      <div class="m-4 lg:text-3xl flex items-center">
        <p>
          Pushing software to its limits, Perrone embraces digital artefacts,
          encouraging and preserving glitches as evidence of their garment’s
          digital origin.
          <br />
          <br />
          Referencing meme culture, Perrone starts their process with low-poly
          images, manipulated using Photoshop and Procreate to draft high-impact
          designs. CLO-3D Finds utility in the handling of material and
          generating pattern-vector files for laser cutting physical material.
          Every step of Perrone's process takes full advantage of digital assets
          and the software at their disposal.
        </p>
      </div>
      <div>
        <img
          id="myImage"
          class="w-[100%]"
          src="src/image/gracehome/g1.png"
          alt="Image" />
        <div class="flex justify-center">
          <img class="w-[30vh]" src="src/image/CROWN HEADER.png" alt="" />
        </div>
      </div>
    </div>
  </div>
  <div>
    <div class="grid sm:grid-cols-3">
      <div class="md:ml-10 flex items-center col-span-2">
        <img
          class="w-[100%]"
          id="myImage"
          src="src/image/gracehome/IMG_2314 Large 1.png"
          alt="Image" />
      </div>
      <div class="m-4 lg:text-3xl flex items-center">
        <div>
          <h1 class="font-bold lg:text-5xl md:text-4xl text-xl text-center">
            “THEMSWEAR”
          </h1>
          <h2>Lorem ipsum ss24</h2>
          <p>
            Facets of my neurodivergence and nonbinary identity are communicated
            through this collection in its accessibility and non-gender-specific
            nature, respectively. Much of the gender-neutral clothing
            commercially available today exists in the form of shapeless,
            loose-fitting, uniform-like garments, rarely diverging from a
            monochromatic palette. It is with great irony that the very attire
            of those challenging conventional gender norms so acutely reflected-
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="m-4 lg:text-3xl">
    <p>
      the term ‘uniformity’, nullifying in parts the very reason behind one’s
      desire to break free from such status quo, to begin with. Instead of
      reducing the nonbinary identity as neither, this collection entertains it
      as both and more, prompting the audience to reconsider the relationship
      between clothing and gender. <br /><br />
      The complete digital parallels of my collection allow for further
      accessibility to my work, especially to those restrained by financial
      means or otherwise unable to purchase or wear the physical garments in my
      attempt to contribute towards a more inclusive sphere in fashion.
    </p>
  </div>
  <div
    class="mt-20 flex justify-center uppercase md:text-xl font-bold md:translate-y-20">
    <h1
      id="digital"
      class="bg-black text-white p-2 rounded-full cursor-pointer">
      see digital fasion
    </h1>
  </div>
</section>
  `
  var images = ["src/image/gracehome/g1.png", "src/image/gracehome/g2.png", "src/image/gracehome/g3.png"];
  
  var currentIndex = 0;

  function changeImage() {
    var imgElement = document.getElementById("myImage");

    imgElement.src = images[currentIndex];
    
    // Increment the index or reset to 0 if it exceeds the array length
    currentIndex = (currentIndex + 1) % images.length;
  }

  // Set interval to change the image every 3 seconds (3000 milliseconds)
  setInterval(changeImage, 3000);
}

loren.addEventListener("click", function () {
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

glitch.addEventListener("click", function () {
  glitchfun();
});

glitchnav.addEventListener("click", function () {
  glitchfun();
});

styling.addEventListener("click", function () {
  stylingfun();
});

stylingnav.addEventListener("click", function () {
  stylingfun();
});

textile.addEventListener("click", function () {
  innovafun();
});

textilenav.addEventListener("click", function () {
  innovafun();
});

grace.addEventListener("click", function () {
  gracefun();
});
gracenav.addEventListener("click", function () {
  gracefun();
});