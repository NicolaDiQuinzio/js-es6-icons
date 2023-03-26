const icons = [
  {
    name: "cat",
    prefix: "fa-",
    type: "animal",
    family: "solid",
    color: "orange",
  },
  {
    name: "crow",
    prefix: "fa-",
    type: "animal",
    family: "solid",
    color: "orange",
  },
  {
    name: "dog",
    prefix: "fa-",
    type: "animal",
    family: "solid",
    color: "orange",
  },
  {
    name: "dove",
    prefix: "fa-",
    type: "animal",
    family: "solid",
    color: "orange",
  },
  {
    name: "dragon",
    prefix: "fa-",
    type: "animal",
    family: "solid",
    color: "orange",
  },
  {
    name: "horse",
    prefix: "fa-",
    type: "animal",
    family: "solid",
    color: "orange",
  },
  {
    name: "hippo",
    prefix: "fa-",
    type: "animal",
    family: "solid",
    color: "orange",
  },
  {
    name: "fish",
    prefix: "fa-",
    type: "animal",
    family: "solid",
    color: "orange",
  },
  {
    name: "carrot",
    prefix: "fa-",
    type: "vegetable",
    family: "solid",
    color: "green",
  },
  {
    name: "apple-alt",
    prefix: "fa-",
    type: "vegetable",
    family: "solid",
    color: "green",
  },
  {
    name: "lemon",
    prefix: "fa-",
    type: "vegetable",
    family: "solid",
    color: "green",
  },
  {
    name: "pepper-hot",
    prefix: "fa-",
    type: "vegetable",
    family: "solid",
    color: "green",
  },
  {
    name: "user-astronaut",
    prefix: "fa-",
    type: "user",
    family: "solid",
    color: "blue",
  },
  {
    name: "user-graduate",
    prefix: "fa-",
    type: "user",
    family: "solid",
    color: "blue",
  },
  {
    name: "user-ninja",
    prefix: "fa-",
    type: "user",
    family: "solid",
    color: "blue",
  },
  {
    name: "user-secret",
    prefix: "fa-",
    type: "fa",
    family: "solid",
    color: "blue",
  },
];

// Seleziono l'elemento HTML con id "icons-container"
const iconsContainer = document.getElementById("icons-container");

// Aggiungo le classi "d-flex" e "flex-wrap" all'elemento iconsContainer
iconsContainer.classList.add("d-flex", "flex-wrap");
// per ogni icona dentro l'array estraggo le proprietà dell'icona tramite la sintassi object destructuring
icons.forEach((icon) => {
  const { name, prefix, type, family, color } = icon;

  // Creazione di un nuovo elemento HTML di tipo "div" per l'icona
  const iconElement = document.createElement("div");
  iconElement.classList.add("icon", "p-2");

  //Creao nuovo elemento HTML utilizzando le proprietà estratte e le converto in maiuscolo
  const iconHTML = `
  <i class="${prefix}${family} ${prefix}${name}" style="color: ${color}; "></i>
  <div class="name">${name.toUpperCase()}</div>
`;
  iconElement.innerHTML = iconHTML;
  iconsContainer.appendChild(iconElement);
});

//Seleziono l'elemento HTML con id "type-filter"
const typeFilter = document.querySelector("#type-filter");
// Aggiungo un eventlistener per l'evento "change" all'elemento typeFilter
typeFilter.addEventListener("change", () => {
  const selectedType = typeFilter.value;
  // Filtro le icone in base al tipo selezionato, o mostrando tutte le icone se non è selezionato alcun tipo
  const filteredIcons = icons.filter(
    (icon) => icon.type === selectedType || selectedType === ""
  );
  // Cancello il contenuto del container prima di aggiungere le icone filtrate
  iconsContainer.innerHTML = "";

  // // Aggiungo le icone filtrate all'elemento iconsContainer
  filteredIcons.forEach((icon) => {
    const iconElement = document.createElement("div");
    iconElement.classList.add("icon");
    iconElement.innerHTML = `<i class="${icon.prefix}${icon.name} ${icon.prefix}${icon.family}" style="color: ${icon.color}"></i><div>${icon.name}</div>`;
    iconsContainer.appendChild(iconElement);
  });
});
