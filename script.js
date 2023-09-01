const loadData = async() =>{
    const response = await fetch('https://openapi.programming-hero.com/api/videos/categories')
    const data = await response.json();
    // console.log(data.data)
    displayCategory(data.data)
}

const displayCategory= category =>{
    const addCategory = document.getElementById('add-category-btn')
    category.forEach(element => {
        // console.log(element.category)
        const btnContainerDiv = document.createElement('div')
        btnContainerDiv.className = "button-a"
        btnContainerDiv.innerHTML = `
          <button onclick = "showData('${element.category_id}')" id="button-all" class="btn px-5 text-base font-medium text-[#252525B3]">${element.category}</button>
        `
        addCategory.appendChild(btnContainerDiv)
    });
}
loadData()

const showData = async(id) =>{
    // if(id){
    //     const buttonAll = document.getElementsByClassName('button-a')
    //     buttonAll.style.background= "#FF1F3D"
    // }
    // console.log('clicked',id)
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`)
    const data = await res.json()
    const dataType = data.data
    // console.log(dataType)
    // sortData(dataType)
    showSearchData(dataType)
}
let categoricalId = 1000
showData(categoricalId)
const showSearchData = (searchData) =>{
    const showcategoricalData = document.getElementById('show-categorical-data')
    showcategoricalData.textContent = '';
    searchData.forEach(cardElement =>{
        console.log(cardElement)
        const convertTime = cardElement.others?.posted_date
        // console.log(convert)
        const hours = Math.floor(convertTime/3600)
        const remainingSecond = convertTime%3600
        const minutes = Math.floor(remainingSecond/60)
        // const seconds = remainingSecond % 60
        // console.log(convertTime,hours, minutes,seconds)
        const cardContainer = document.createElement('div')
        cardContainer.classList = "card bg-base-100 shadow-xl"
        cardContainer.innerHTML = `
        
        <figure class="fig-img pt-10 h-64 relative">   
            <img src="${cardElement.thumbnail}" alt="Shoes" class="rounded-xl" />
            <div class="absolute -bottom-5
             right-4 h-16 text-xs text-[#FFF] font-normal">${hours}hrs ${minutes}min  ago</div>
        </figure>
            
        <div class="card-body flex flex-row">
            <div class="img-card w-10 h-10">
                <img src="${cardElement.authors[0]?.profile_picture}" alt="" class="rounded-full">
            </div>
        
            <div class="space-y-2">
                <h2 class="text-base font-bold">${cardElement.title}</h2>

                <div>
                    <p class="text-sm text-[#171717B2] font-normal">${cardElement.authors[0]?.profile_name}</p>
                    <p></p>
                </div>
                <p class="text-sm font-normal text-[#171717B2]">${cardElement.others?.views}</p>

            </div>
        </div>
        `
        showcategoricalData.appendChild(cardContainer)
    })

}
// showData()
// const sortData = (sor) =>{
//    console.log(sor)
//    sor.sort(function(a, b){
//     return a.others - b.others;
// });
// // }
// sortData()