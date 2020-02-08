import React from "react" 
import Grid from "@material-ui/core/Grid";
function Footer(){
 return (
   <footer className="footerAre">
     <div className="footerInner">
       <div>
         <h1 className="footerLogo">Madinabonu</h1>
       </div>
       <div className="socialIconAria">
         <ul className="socialIcon">
           <Grid container md={12} direction="row" justify="center" alignItems="center">
             <ul className="social-icon_footer">
               <li>
                 <a href="#">
                   <i class="fa fa-facebook"></i>
                 </a>
               </li>
               <li>
                 <a href="#">
                   <i class="fa fa-twitter"></i>
                 </a>
               </li>
               <li>
                 <a href="#">
                   <i class="fa fa-instagram"></i>
                 </a>
               </li>
               <li>
                 <a href="#">
                   <i class="fa fa-google-plus"></i>
                 </a>
               </li>
               <li>
                 <a href="#">
                   <i class="fa fa-linkedin"></i>
                 </a>
               </li>
               <li>
                 <a href="#">
                   <i class="fa fa-pinterest"></i>
                 </a>
               </li>
               <li>
                 <a href="#">
                   <i class="fa fa-skype"></i>
                 </a>
               </li>
               <li>
                 <a href="#">
                   <i class="fa fa-flickr"></i>
                 </a>
               </li>
               <li>
                 <a href="#">
                   <i class="fa fa-dribbble"></i>
                 </a>
               </li>
               <li>
                 <a href="#">
                   <i class="fa fa-rss"></i>
                 </a>
               </li>
             </ul>
           </Grid>
         </ul>
       </div>
     </div>
   </footer>
 );
}

export default Footer;