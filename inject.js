function createContactElement(name,content){
    var contactElement = document.createElement("li");
    var contactElementName = document.createElement("label");
    var contactElementContent = document.createElement("span");
    contactElementName.innerHTML = name;
    contactElementContent.innerHTML = content;
    contactElement.appendChild(contactElementName);
    contactElement.appendChild(contactElementContent);
    return contactElement
}

var contactUl = document.createElement("ul");
contactUl.className = "contact-inserted"

//deal with email
var emailLink=document.querySelector("#email li a").innerHTML
// insert
var emailElement = createContactElement("Email:", emailLink)
contactUl.appendChild(emailElement)


//deal with linkedIn url
var linkedinUrl=document.querySelector(".view-public-profile").href
var linkedInElement = createContactElement("LinkedIn:", linkedinUrl)
contactUl.appendChild(linkedInElement)


//deal with website Urls
var allWebsiteUrls = document.querySelectorAll("#website-view a")
for(var i=0;i<allWebsiteUrls.length;i++){
    var currentWebsite = allWebsiteUrls[i]

    var currentWebsiteName = currentWebsite.innerHTML
    var webSiteUrlEncoded = currentWebsite.href
    var webSiteUrlDecoded = decodeURIComponent(webSiteUrlEncoded)
    var currentWebsiteUrl = webSiteUrlDecoded.split("url=")[1].split("&urlhash")[0]

    //insert
    var websiteElement = createContactElement(currentWebsiteName+": ", currentWebsiteUrl)
    contactUl.appendChild(websiteElement)  
}

//start to append additional informaiton after the profile overview
document.querySelector(".profile-card").appendChild(contactUl)