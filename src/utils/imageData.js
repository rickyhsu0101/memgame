let urls = [
  "https://pbs.twimg.com/profile_images/725013638411489280/4wx8EcIA_400x400.jpg",
  "https://vignette.wikia.nocookie.net/simpsons/images/6/65/Bart_Simpson.png/revision/latest?cb=20180319061933",
  "https://upload.wikimedia.org/wikipedia/en/thumb/e/ec/Lisa_Simpson.png/220px-Lisa_Simpson.png",
  "https://thumbs-prod.si-cdn.com/-cYuIfDBHHLIwAuiHrkLITrv1Po=/800x600/filters:no_upscale()/https://public-media.smithsonianmag.com/filer/91/f7/91f72103-18c4-48a7-b9a9-9d251abaa8bc/apr2017_h02_phenom.jpg",
];
let imageObjArray = urls.map(url => ({imageLink: url, clicked: false}));

export default {
  shuffle: () => {
    let newArray = [];
    let end = 4;
    for(let i = 0; i < end; i++){
      let randIndex = Math.floor(imageObjArray.length*Math.random());
      newArray.push(imageObjArray.splice(randIndex, 1)[0]);
    }
    imageObjArray = newArray;
    console.log(imageObjArray);
    return imageObjArray;
  },
  checkFinish: () => {
    let finished = true;
    for(let i = 0; i < imageObjArray.length; i++){
      if(imageObjArray[i].clicked === false){
        finished = false;
      }
    }
    return finished;
  },
  clicked: (url) => {
    for(let i = 0; i < imageObjArray.length; i++){
      if(imageObjArray[i].imageLink === url){
        if(imageObjArray[i].clicked === true){
          return true;
        }else{
          return false;
        }
      }
    }
  },
  reset: () => {
    for (let i = 0; i < imageObjArray.length; i++) {
      imageObjArray[i].clicked = false;
    }
  },
  get: () => imageObjArray,
  set: (url) => {
    for(let i = 0; i < imageObjArray.length; i++){
      if(imageObjArray[i].imageLink === url){
        imageObjArray[i].clicked = true;
      }
    }
  }
};
