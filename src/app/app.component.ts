import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

//Constants
import { THEME } from 'src/theme/theme.constant';

import { PrimeNGConfig } from 'primeng/api';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'inputVal';
  theme="";
  theme_id=0
  THEME=THEME
  list_of_themes=[]
  constructor(
    @Inject(DOCUMENT) private document:Document,
    private primengConfig: PrimeNGConfig
  ){
    this.list_of_themes=Object.keys(THEME)
    // this.loopTheme()
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  loopTheme(){
    this.list_of_themes=Object.keys(THEME)
    this.theme_id+=1;
    if (this.theme_id>=this.list_of_themes.length){
      this.theme_id=0
    }
    this.theme=this.list_of_themes[this.theme_id]
    this.switchTheme(THEME[this.theme]['stylesheet'])
    console.log(this.list_of_themes,THEME[this.theme])
  }

  /**
   * switches href attribute of <link id='app-theme'> in html <head> 
   * @param theme (string) name for element found in dist
   */
  switchTheme(theme:string){
    let themeLink=this.document.getElementById('app-theme') as HTMLLinkElement;
    if(themeLink){
      themeLink.href=theme
    }
  }
}
