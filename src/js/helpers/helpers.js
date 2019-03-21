export function parseStoryblockData(arr){
  let appData ={}
  for(let i=0;i<arr.length;i++){
    //adds posts to array
    if(arr[i].name.includes('Post')){
      appData.posts = appData.posts || [];
      appData.posts.push(arr[i]);
    //handles all other data
    } else {
      let contentArr = arr[i].content.body;
      for(let v=0;v<contentArr.length;v++){
        let current = contentArr[v];
        //stores clean name
        let cName = current.component.replace(/\s/g,'');
        //removes unwanted data
        delete current._uid;
        delete current.component;
        //catch for nested arrays with 1 title
        let len = Object.keys(current).length;
        if(len > 1){
          let arr2=[];
          for(let d=0;d<len;d++){
            arr2.push(current[Object.keys(current)[d]]);
          }
          appData[cName] = arr2;
        }else{
          appData[cName] = current[Object.keys(current)[0]];
        }
      }
    }
  }
  return appData;
};

export function parseStoryblockArticle(arr){
  let article ={};
  if(typeof(arr) !== 'undefined'){   
    article = arr;
  } else {
    console.log('no article found')
    console.log(arr);
  }
  return article;
};


export function validateForm(name, email, message){
  const re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

  if (name.length < 1 || name.length > 200){
    return 'Please use a proper name';
  } else if (!re.test( String(email).toLowerCase() )){
    return 'Please check your email address and try again.';
  } else if (message.length < 10 || message.length > 3000){
    return 'Please enter a message of a few words or more.  There is a message limit.';
  } else{
    return true;
  }
}

export function articleDetailLinker(slug, ref, params){
  if (params){
    params = '&'+params;
  }else{
    params = '';
  }
  if (ref){
    ref = '?ref='+ref;
  }else{
    ref = '?ref=internal'
  }
  const base = './articledetail/';
  const fullURL = base+slug+ref+params;

  return fullURL;
}

export function getSlugFromURL(url){
  return url.split('/articledetail/')[1].split('?')[0];
}