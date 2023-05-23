import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,main,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{margin:0;padding:0;border:0;font-size:100%;font:'sans-serif';vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section{display:block}[hidden]{display:none}body{line-height:1}menu,ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:'';content:none}table{border-collapse:collapse;border-spacing:0}
  * {
    font-family: sans-serif;
    box-sizing: border-box;
  }
  body {
    width: 80%;
    min-width: 966px;
    margin: 0 auto;
    font-size: 16px;
  }
  a {
    text-decoration: none;
  }
  a:visited {
    color: #000;
  }
  button {
    cursor: pointer;
  }

  /* side-bar 있을 때 적용*/
  .main {
      width: 80%;
      height: auto;
      min-height: 100vh;
      float: right;
      padding: 1em;
      border-left: 1px solid #ddd;
  }
  
  /* side-bar 없을 때 적용 */
  .main-noSide {
      width: 100%;
      height: auto;
      min-height: 100vh;
      float: right;
      padding: 1em;
  }

`;

export default GlobalStyle;
