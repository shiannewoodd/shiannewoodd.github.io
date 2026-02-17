function showFilter() {
    const filterForm = document.getElementById("filterContent");
    const addForm = document.getElementById("newContent");
  
    if (filterForm.style.display === "none" || filterForm.style.display === "") {
      filterForm.style.display = "block";
      addForm.style.display = "none";
    } else {
      filterForm.style.display = "none";
    }
  }
  
  function showAddNew() {
    const filterForm = document.getElementById("filterContent");
    const addForm = document.getElementById("newContent");
  
    if (addForm.style.display === "none" || addForm.style.display === "") {
      addForm.style.display = "flex";
      filterForm.style.display = "none";
    } else {
      addForm.style.display = "none";
    }
  }
  
  function filterArticles() {
    const showOpinion = document.getElementById("opinionCheckbox").checked;
    const showRecipe = document.getElementById("recipeCheckbox").checked;
    const showUpdate = document.getElementById("updateCheckbox").checked;
  
    const opinionArticles = document.querySelectorAll("article.opinion");
    const recipeArticles = document.querySelectorAll("article.recipe");
    const updateArticles = document.querySelectorAll("article.update");
  
    opinionArticles.forEach((a) => (a.style.display = showOpinion ? "" : "none"));
    recipeArticles.forEach((a) => (a.style.display = showRecipe ? "" : "none"));
    updateArticles.forEach((a) => (a.style.display = showUpdate ? "" : "none"));
  }
  
  function addNewArticle() {
    const title = document.getElementById("inputHeader").value.trim();
    const text = document.getElementById("inputArticle").value.trim();
  
    const opinionRadio = document.getElementById("opinionRadio");
    const recipeRadio = document.getElementById("recipeRadio");
    const lifeRadio = document.getElementById("lifeRadio");
  
    let typeClass = "";
    let markerText = "";
  
    if (opinionRadio.checked) {
      typeClass = "opinion";
      markerText = "Opinion";
    } else if (recipeRadio.checked) {
      typeClass = "recipe";
      markerText = "Recipe";
    } else if (lifeRadio.checked) {
      typeClass = "update";
      markerText = "Update";
    } else {
      return;
    }
  
    if (title.length === 0 || text.length === 0) {
      return;
    }
  
    const articleList = document.getElementById("articleList");
  
    const article = document.createElement("article");
    article.classList.add(typeClass);
  
    const marker = document.createElement("span");
    marker.classList.add("marker");
    marker.textContent = markerText;
  
    const h2 = document.createElement("h2");
    h2.textContent = title;
  
    const p1 = document.createElement("p");
    p1.textContent = text;
  
    const p2 = document.createElement("p");
    const link = document.createElement("a");
    link.href = "moreDetails.html";
    link.textContent = "Read more...";
    p2.appendChild(link);
  
    article.appendChild(marker);
    article.appendChild(h2);
    article.appendChild(p1);
    article.appendChild(p2);
  
    articleList.appendChild(article);
  
    document.getElementById("inputHeader").value = "";
    document.getElementById("inputArticle").value = "";
    opinionRadio.checked = false;
    recipeRadio.checked = false;
    lifeRadio.checked = false;
  
    filterArticles();
  }
  