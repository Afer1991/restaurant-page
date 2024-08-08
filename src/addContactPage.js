const addContactPage = () => {
  const content = document.getElementById("content");

  while (content.hasChildNodes()) {
    content.removeChild(content.firstChild);
  }

  const container = document.createElement("div");
  container.classList.add("container");
  content.appendChild(container);

  container.innerHTML =  '<div>' +
                         '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FFF" height="25px" width="25px"><title>phone</title><path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" /></svg>' +
                         '123 456 7890' +
                         '</div>' +
                         '<div>' +
                         '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FFF" height="25px" width="25px"><title>home</title><path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" /></svg>' +
                         'Main St 29, New York, USA' +
                         '</div>' +
                         '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3022.184132755555!2d-73.98554262429207!3d40.757974693273816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1723048575426!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
};

export default addContactPage;