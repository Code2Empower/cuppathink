import showdown from 'showdown';
import DOMPurify from 'dompurify';
const converter = new showdown.Converter();

export function parseStoryblockData(arr){
  let appData ={}
  for(let i=0;i<arr.length;i++){
    //adds posts to array
    if(arr[i].name.includes('Post')){
      appData.posts = appData.posts || [];
      appData.posts.push(arr[i]);
    } 
  }
  return appData;
};

export function parseStoryblockPage(arr, pagename){
  let page = {};
  page[pagename] = {};

  if(typeof(arr) !== 'undefined'){
    const body = arr[0].content.body;
    for(let i=0;i<body.length; i++) {
      let current = body[i];
      delete current.component;
      delete current._uid;
      let cleanName = Object.keys(current)[0];
      page[pagename][cleanName] = current[cleanName];
    }
  } else {
    console.log('no page data found')
  }
  return page[pagename];
}

export function parseStoryblockArticle(arr){
  let article ={};
  if(typeof(arr) !== 'undefined'){   
    article = arr;
  } else {
    console.log('no article found')
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


export function purifyHTML(str, noFollow){
    const htmlDirty = converter.makeHtml(str);
    const htmlClean = DOMPurify.sanitize(htmlDirty).toString();
    console.log(htmlClean);
    if(noFollow){
      //regex matches all '<a href=' except internal links, then adds the correct params
      const htmlNoFollow = htmlClean.replace(/(?!<a href="\/|<a href=".\/|<a href="https:\/\/cuppathink.blog|<a href="http:\/\/cuppathink.blog|<a href="www.cuppathink.blog|<a href="https:\/\/www.cuppathink.blog)<a href=/g, "<a rel='nofollow noopener noreferrer' target='_blank' href=");
      return htmlNoFollow;   
    }else{
      return htmlClean;
    }
}