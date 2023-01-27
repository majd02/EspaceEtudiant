import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
    templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent implements OnInit {
  title = 'app';
  loadScript(url: string) {
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }

  ngOnInit() {
    this.loadScript('assets/assets/vendor/jquery/jquery.min.js');
    this.loadScript('assets/js/utils/page-loader.js');
    this.loadScript('assets/js/vendor/simplebar.min.js');
    this.loadScript('assets/js/utils/liquidify.js');
    this.loadScript('assets/js/vendor/xm_plugins.min.js');
    this.loadScript('assets/js/vendor/tiny-slider.min.js');
    this.loadScript('assets/js/vendor/Chart.bundle.min.js');
    this.loadScript('assets/js/global/global.hexagons.js');
    this.loadScript('assets/js/global/global.tooltips.js');
    this.loadScript('assets/js/global/global.popups.js');
    this.loadScript('assets/js/header/header.js');
    this.loadScript('assets/js/sidebar/sidebar.js');
    this.loadScript('assets/js/content/content.js');
    this.loadScript('assets/js/form/form.utils.js');
    this.loadScript('assets/js/utils/svg-loader.js');
    /////back 
    this.loadScript('assets/assets/js/sb-admin-2.min.js');



  }

}
