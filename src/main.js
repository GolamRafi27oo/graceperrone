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


function hover(img)
{
 img.src = "src/image/ghostlimage.png"
}
function hoverOut(img){
  img.src = "src/image/ring.png"
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
  page.innerHTML = `
  <section>
  <section class="mt-40 ">
    <div class="grid md:grid-cols-2 items-center">
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
  <section class="mt-10">
    <div class="grid grid-cols-2">
      <div class="grid grid-cols-1 place-items-end">
        <div>
          <img class="md:h-[90vh] md:w-[60vh]" src="src/image/loremimage/Monsterlook 1.png" alt="">
          <img class="md:h-[90vh] md:w-[60vh]" src="src/image/loremimage/Portfolio 14 1.png" alt="">
          <img class="md:h-[90vh] md:w-[60vh]" src="src/image/loremimage/_cyborg look 2.png" alt="">
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

  <section class="mt-40 font-bold ">
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
  </section>
    `;

  let concept = document.getElementById("concept");
  concept.addEventListener("click", function () {
    page.innerHTML = `
      <div>
        <h1 class="md:text-4xl text-2xl font-bold">CONCEPT</h1>
        <h1 class="md:text-2xl font-bold pt-2">LOREM IPSUM:</h1>
        <div class="mt-4">
          <img
            class="rounded-sm"
            src="src/image/loremimage/concept/emphasises the Dysphoria.png"
            alt="" />
        </div>

        <div class="p-2 border-l-black border-l-4 mt-10">
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
  page.innerHTML = `
  <div>
  <section class="grid md:grid-cols-2 items-center font-semibold">
    <div class="m-4">
      <img class="rounded-md" src="src/image/OUROBOROS/oroboruslook1 1.webp" alt="">
    </div>
      <div class="text-left">
        <ul class="list-disc ml-10">
          <li>Coral Bleaching</li>
          <li>Corsetry</li>
          <li>Symbiosis</li>
          <li>Scaffoiding</li>
          <li>Shibari</li>
        </ul>
        <ul class="ml-5 mt-5">
          <p>“OUROBOROS EXPRESSES THE UNITY OF ALL THINGS, MATERIAL AND SPIRITUAL, WHICH NEVER DISAPPEARS BUT PERPETUALLY CHANGES FORM IN AN ETERNAL CYCLE OF DESTRUCTION AND RE-CREATION’</p>
        </ul>
        <ul class="flex justify-center">
          <img src="src/image/Layer 93 3.webp" alt="">
        </ul>
      </div>
  </section>
  <section class="grid md:grid-cols-2 items-center font-semibold p-10 shadow-2xl rounded-lg">
    <div class="m-4 shadow-2xl">
      <img class="rounded-md" src="src/image/OUROBOROS/IMG_4748 (3) 1.webp" alt="">
    </div>
    <div>
      <img class="rounded-md" src="src/image/OUROBOROS/IMG_4747 1.webp" alt="">
    </div>
    <div class="shadow-2xl">
      <img class="rounded-md" src="src/image/OUROBOROS/IMG_4897 1.webp" alt="">
    </div>
    <div class="m-4">
      <img class="rounded-md" src="src/image/OUROBOROS/display_img2.webp" alt="">
      <p class="p-2">Zooxanthellae Is The Microscopic Algae Which Pigments Coral, The Two Organisms Are Reliant On Each Other For Survival. Because The Algae Does Not Have The Capacity To Handle Large Fluctuations In Temperature, The Organism Dies Stripping The Coral Of Its Colour. This Effect Is Called Coral Bleaching, A Name That Implies The Sterilisation Of Nature.</p>
    </div>
    <div class="shadow-2xl mt-4 mb-4">
      <img class="rounded-md" src="src/image/OUROBOROS/IMG_9709.webp" alt="">
    </div>
    <div>
      <img src="src/image/OUROBOROS/Layer 1.webp" alt="">
    </div>
    <div class="grid grid-cols-2 mt-10">
      <img class="p-2" src="src/image/OUROBOROS/IMG_6579 1.webp" alt="">
      <img src="src/image/OUROBOROS/04D68C2C-4407-4241-B246-51331D1E8499 1.webp" alt="">
      <img class="p-2" src="src/image/OUROBOROS/IMG_6580 1.webp" alt="">
      <img src="src/image/OUROBOROS/EB3C947E-4EDA-4CD4-AF5D-E8C74EBB14DE 1.webp" alt="">
    </div>
    <div class="m-6 translate-y-5 shadow-2xl">
      <img class="rounded-md" src="src/image/OUROBOROS/FD4D9F47-4A27-455E-959F-AEE33FFF1C2C 1.webp" alt="">
    </div>

    <div class="mt-56">
      <img src="src/image/OUROBOROS/20220511-_DSC4633 1.webp" alt="">
    </div>
    <div>
      <img src="src/image/OUROBOROS/IMG_6581 1.webp" alt="">
    </div>
    <div>
      <img src="src/image/OUROBOROS/IMG_6582 1.webp" alt="">
    </div>
    <div class="-translate-y-56">
      <img src="src/image/OUROBOROS/IMG_6583 1.webp" alt="">
    </div>
  </section>
</div>
  `;
};

let lillustrafun = function () {
  navfun();
  page.innerHTML = `
  <div>
  <div class="text-center">
    <h1 class="md:text-4xl text-2xl font-bold">ILLUSTRATION</h1>
    <div class="flex justify-center mt-20">
      <div class="sm:w-80 sm:h-80  bg-red-700 rounded-full"></div>
    </div>
    <div class="flex justify-center ">
      <img class="flex justify-center w-60 sm:-translate-y-56" src="src/image/ILLUSTRATION/drawing 1.webp" alt="">
    </div>
  </div>
  <div class="grid md:grid-cols-2 mt-10">
    <div class="text-left">
      <h1 class="md:text-4xl text-2xl font-bold">POST-HUMAN WORLD BUILDING</h1>
      <p class="mt-4 font-semibold">MY WORK IS BORN OUT OF AN IMAGINED POST-HUMAN WORLD WHICH CONSIDERS THE CLASHES, TENSIONS, AND CONSEQUENCES, OF LIVING IN AN AGE WHERE THE DISTINCTION BETWEEN THE REAL AND THE DIGITAL, THE ORIGINAL AND ITS REPRODUCTIONS, IS BECOMING EVERMORE UNCLEAR. ESSENTIAL POST-HUMAN QUESTIONS INCLUDE CONSIDERATIONS OF WHERE OUR BODIES STOP GIVEN OUR EVER-DEPENDANT RELATIONSHIP WITH TECHNOLOGY, AND IMAGINING A SCENARIO AND CREATING FOR THAT.  I CONSIDER THE ROLES, HUMAN OR AUTOMATED, PEOPLE IN THE FUTURE MAY TAKE. FOR EXAMPLE, IF SOMEONE IS A NOMAD WHAT TOOLS WOULD THEY NEED, AND HOW WOULD THEY MAKE USE OF THE RESOURCES WOULD THEY HAVE?</p>
    </div>
    <div class="flex items-center">
      <img src="src/image/ILLUSTRATION/cool asset 1.webp" alt="">
    </div>
  </div>
  <div>
    <div class="grid sm:grid-cols-3 sm:mt-40 mt-20 p-5 justify-center">
      <div class="bg-white m-2 shadow-2xl flex justify-center p-4 rounded-md">
        <img class="h-80" src="src/image/ILLUSTRATION/scan_s1975580_2023-08-06-00-03-18 3 1.webp" alt="">
      </div>
      <div class="bg-white m-2 shadow-2xl flex justify-center p-4 rounded-md">
        <img class="h-80" src="src/image/ILLUSTRATION/scan_s1975580_2023-08-06-00-03-18 4 1.webp" alt="">

      </div>
      <div class="bg-white m-2 shadow-2xl flex justify-center p-4 rounded-md">
        <img class="h-80" src="src/image/ILLUSTRATION/scan_s1975580_2023-08-06-00-03-18 5 1.webp" alt="">

      </div>
      <div class="bg-white m-2 shadow-2xl flex justify-center p-4 rounded-md">
        <img class="h-80 " src="src/image/ILLUSTRATION/cyborgprincesschimera 1.webp" alt="">
      </div>
      <div class="bg-white m-2 shadow-2xl flex justify-center p-4 rounded-md">
        <img class="h-80" src="src/image/ILLUSTRATION/hatguy 2.webp" alt="">
      </div>
    </div>
    <div class="mt-40 md:text-4xl text-2xl font-bold">
      <h1>CYBORG ILLUSTRATION</h1>
      <div class="grid sm:grid-cols-2">
        <div class="bg-white m-2 shadow-2xl flex justify-center p-4 rounded-md">
          <img class="h-80 rounded-md" src="src/image/ILLUSTRATION/Screenshot 2023-09-07 at 16.30 1.webp" alt="">
        </div>
        <div class="bg-white m-2 shadow-2xl flex justify-center p-4 rounded-md">
          <img class="h-80 rounded-md" src="src/image/ILLUSTRATION/Screenshot 2023-09-18 at 19.13 1.webp" alt="">
        </div>
        <div class="bg-white m-2 shadow-2xl flex justify-center p-4 rounded-md">
          <img class="h-80 rounded-md" src="src/image/ILLUSTRATION/Screenshot 2023-09-20 at 17.00 1.webp" alt="">
        </div>
        <div class="bg-white m-2 shadow-2xl flex justify-center p-4 rounded-md">
          <img class="h-80 rounded-md" src="src/image/ILLUSTRATION/Screenshot 2023-10-17 at 19.00 1.webp" alt="">
        </div>
        <div class="bg-white m-2 shadow-2xl flex justify-center p-4 rounded-md">
          <img class="h-80 rounded-md" src="src/image/ILLUSTRATION/thumbnail_Screenshot 2023-09-15 at 21.03 1.webp" alt="">
        </div>
      </div>
    </div>
  </div>
  `;
};

loren.addEventListener("click", function () {
  console.log("clicked")
  lorenfun();
});
lorennav.addEventListener("click", function () {
  lorenfun();
});

/*
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
*/
