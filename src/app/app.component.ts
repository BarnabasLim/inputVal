import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

//Constants
import { THEME } from 'src/theme/theme.constant';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'inputVal';
  constructor(
    @Inject(DOCUMENT) private document:Document
  ){}

  public theme_id=0
  loopTheme(){
    let list_of_themes=Object.keys(THEME)
    this.theme_id+=1;
    if (this.theme_id>=list_of_themes.length){
      this.theme_id=0
    }
    this.switchTheme(THEME[list_of_themes[this.theme_id]])
    console.log(list_of_themes,THEME[list_of_themes[this.theme_id]])
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
