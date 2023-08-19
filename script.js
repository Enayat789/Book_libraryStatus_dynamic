// creating array of object
var library = [
  {
    title: "Enayat",
    author: "The Road Ahead",
    readingStatus: true,
  },
  {
    title: "Steve Jobs",
    author: "Walter Isaacson",
    readingStatus: true,
  },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    readingStatus: false,
  },
  {
    title: "The Final Book of The Hunger Games",
    author: "Suzanne",
    readingStatus: true,
  },
  {
    title: "The Final Book of The Hunger Games",
    author: "Suzanne",
    readingStatus: true,
  },
  {
    title: "The Final Book of The Hunger Games",
    author: "Suzanne",
    readingStatus: true,
  },
  {
    title: "The Final Book of The Hunger Games",
    author: "Suzanne",
    readingStatus: true,
  },
  {
    title: "The Final Book of The Hunger Games",
    author: "Suzanne",
    readingStatus: true,
  },
  {
    title: "The Final Book of The Hunger Games",
    author: "Suzanne",
    readingStatus: true,
  },
  {
    title: "The Final Book of The Hunger Games",
    author: "Suzanne",
    readingStatus: true,
  },
  {
    title: "The Final Book of The Hunger Games",
    author: "Suzanne",
    readingStatus: true,
  },
  {
    title: "The Final Book of The Hunger Games",
    author: "Suzanne",
    readingStatus: true,
  },
  {
    title: "The Final Book of The Hunger Games",
    author: "Suzanne",
    readingStatus: true,
  },
  {
    title: "The Final Book of The Hunger Games",
    author: "Suzanne",
    readingStatus: true,
  },
  {
    title: "The Final Book of The Hunger Games",
    author: "Suzanne",
    readingStatus: true,
  },
];

// FUNCTION ****
const myDiv = document.getElementById("mainDiv");

const createDiv = document.createElement("div");
createDiv.id = "library_div";

library.forEach((run) => {
  const createEachDiv = document.createElement("div");
  createEachDiv.id = "eachProfile_div";
  createEachDiv.innerHTML = `
        <div class="profile_div">
          <h4>Book: ${run.title}</h4>
          <p>Author: ${run.author}</p>
          <p>Read: ${run.readingStatus}</p>
        </div>
        `;
  createDiv.appendChild(createEachDiv);
});

myDiv.appendChild(createDiv);

// FOOTER ***********

const socialMedia_links = [
  {
    image: "images/facebook icon.webp",
    url: "https://www.facebook.com/enayat.bhai.73",
  },
  {
    image: "images/insta icon.png",
    url: "https://www.instagram.com/enayatullah0786/",
  },
  {
    image: "images/twitter icon.png",
    url: "https://twitter.com/Enayatulla76941",
  },
  {
    image: "images/youtube icon.png",
    url: "https://www.youtube.com/channel/UCSNazIMeRMgV02mhgvnuZHA",
  },
];

const footerDiv = document.getElementById("footer");

const main_footer = document.createElement("div");
main_footer.id = "main_footerDiv";

// craeting div in which the text will show
const contact_socialMedia = document.createElement("div");
contact_socialMedia.id = "contact_socialMediaText";
contact_socialMedia.innerHTML = `<p>Connect With Me: </p>`;

// creating div for social media links with images
const socialMedia_linksDiv = document.createElement("div");
socialMedia_linksDiv.id = "socialMedias_links";

socialMedia_links.forEach((link) => {
  const iconLink = document.createElement("a");
  iconLink.href = link.url;

  const images = document.createElement("img");
  images.src = link.image;

  iconLink.appendChild(images);
  socialMedia_linksDiv.appendChild(iconLink);
});

// appending the child to the parents
main_footer.appendChild(contact_socialMedia);
main_footer.appendChild(socialMedia_linksDiv);

// creating a div in footer in which a para will be there

const copyright_div = document.createElement("div");
copyright_div.id = "copyright_footerDiv";
copyright_div.innerHTML = `<p>©2023 Copyright: Dynamic Footer</p>`;

footerDiv.appendChild(main_footer);
footerDiv.appendChild(copyright_div);
