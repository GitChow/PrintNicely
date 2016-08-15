var contactUl = document.createElement("ul");
contactUl.className = "contact-inserted"

//deal with email
var email=document.querySelector("#email li a").innerHTML
// start to insert
var emailLi = document.createElement("li");
emailLi.innerHTML = "Email: "+email
contactUl.appendChild(emailLi)

//deal with linkedIn url
var linkedinUrl=document.querySelector(".view-public-profile").href
var linkedinLi = document.createElement("li");
linkedinLi.innerHTML = "LinkedIn: "+linkedinUrl
contactUl.appendChild(linkedinLi)

//deal with website Urls

var allWebsiteUrls = document.querySelectorAll("#website-view a")
for(var i=0;i<allWebsiteUrls.length;i++){
    var currentWebsite = allWebsiteUrls[i]

    var currentWebsiteName = currentWebsite.innerHTML
    var webSiteUrlEncoded = currentWebsite.href
    var webSiteUrlDecoded = decodeURIComponent(webSiteUrlEncoded)
    var currentWebsiteUrl = webSiteUrlDecoded.split("url=")[1].split("&urlhash")[0]
    console.info(currentWebsiteName+":"+currentWebsiteUrl)

    // start to insert
    var contactLi = document.createElement("li")
    contactLi.innerHTML = currentWebsiteName + ": " + currentWebsiteUrl
    contactUl.appendChild(contactLi)
}


//start to append additional informaiton after the profile overview
document.querySelector(".profile-card").appendChild(contactUl)