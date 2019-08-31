import { Component, OnInit } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { environment } from '../environments/environment';

import { faAt } from '@fortawesome/free-solid-svg-icons';
import { faBan } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faBolt } from '@fortawesome/free-solid-svg-icons';
import { faBold } from '@fortawesome/free-solid-svg-icons';
import { faBug } from '@fortawesome/free-solid-svg-icons';
import { faBullhorn } from '@fortawesome/free-solid-svg-icons';
import { faBullseye } from '@fortawesome/free-solid-svg-icons';
import { faCalculator } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { faCertificate } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronCircleUp } from '@fortawesome/free-solid-svg-icons';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
//import { faCog } from '@fortawesome/free-solid-svg-icons';
//import { faCogs } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import { faCompass } from '@fortawesome/free-solid-svg-icons';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { faCube } from '@fortawesome/free-solid-svg-icons';
import { faCubes } from '@fortawesome/free-solid-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { faExclamation } from '@fortawesome/free-solid-svg-icons';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faFax } from '@fortawesome/free-solid-svg-icons';
import { faFlag } from '@fortawesome/free-solid-svg-icons';
import { faFolder } from '@fortawesome/free-solid-svg-icons';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { faFont } from '@fortawesome/free-solid-svg-icons';
import { faGenderless } from '@fortawesome/free-solid-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHistory } from '@fortawesome/free-solid-svg-icons';
import { faICursor } from '@fortawesome/free-solid-svg-icons';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import { faInbox } from '@fortawesome/free-solid-svg-icons';
import { faInfo } from '@fortawesome/free-solid-svg-icons';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { faItalic } from '@fortawesome/free-solid-svg-icons';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { faListAlt } from '@fortawesome/free-solid-svg-icons';
import { faListOl } from '@fortawesome/free-solid-svg-icons';
import { faListUl } from '@fortawesome/free-solid-svg-icons';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faMap } from '@fortawesome/free-solid-svg-icons';
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { faMapPin } from '@fortawesome/free-solid-svg-icons';
import { faMapSigns } from '@fortawesome/free-solid-svg-icons';
import { faMicrophone } from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { faPause } from '@fortawesome/free-solid-svg-icons';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faPhoneSquare } from '@fortawesome/free-solid-svg-icons';
import { faPrint } from '@fortawesome/free-solid-svg-icons';
//import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { faRegistered } from '@fortawesome/free-solid-svg-icons';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faServer } from '@fortawesome/free-solid-svg-icons';
import { faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faSitemap } from '@fortawesome/free-solid-svg-icons';
import { faSpaceShuttle } from '@fortawesome/free-solid-svg-icons';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { faSquare } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faTag } from '@fortawesome/free-solid-svg-icons';
import { faTags } from '@fortawesome/free-solid-svg-icons';
import { faTh } from '@fortawesome/free-solid-svg-icons';
import { faThLarge } from '@fortawesome/free-solid-svg-icons';
import { faThList } from '@fortawesome/free-solid-svg-icons';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { faTrademark } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faUniversity } from '@fortawesome/free-solid-svg-icons';
import { faUnlock } from '@fortawesome/free-solid-svg-icons';
import { faUnlockAlt } from '@fortawesome/free-solid-svg-icons';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faUserTimes } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
//import { faWrench } from '@fortawesome/free-solid-svg-icons';

//// Icons - Generic
//import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
//import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
//import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
//import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

//import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
//import { faArchive } from '@fortawesome/free-solid-svg-icons';
//import { faAsterisk } from '@fortawesome/free-solid-svg-icons';

//// Icons - Footer
//import { faBalanceScale } from '@fortawesome/free-solid-svg-icons';
//import { faPlus } from '@fortawesome/free-solid-svg-icons';
//import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
//import { faCircle } from '@fortawesome/free-solid-svg-icons';

//// Icons - Main Navigation
//import { faBars } from '@fortawesome/free-solid-svg-icons';
//import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
//import { faUser } from '@fortawesome/free-solid-svg-icons';
//import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
//import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
//import { faQuestion } from '@fortawesome/free-solid-svg-icons';
//import { faWrench } from '@fortawesome/free-solid-svg-icons';
//import { faCog } from '@fortawesome/free-solid-svg-icons';
//import { faCogs } from '@fortawesome/free-solid-svg-icons';

//// Icons - Side Navigation (includes: vdFaEnvelope, vdFaUser, vdFaSignInAlt)
//import { faHome } from '@fortawesome/free-solid-svg-icons';
//import { faClipboardList } from '@fortawesome/free-solid-svg-icons';
//import { faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
//import { faSort } from '@fortawesome/free-solid-svg-icons';

//import { FaConfig } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  // Properties
  public appName = environment.CLIENT_APP_NAME;
  private serverSecrete = environment.SERVER_SECRETE;
  private serverApiUrl = environment.SERVER_API_URL;

  // Icons - Generic
  //vdFaAngleUp = faAngleUp;
  //vdFaAngleDown = faAngleDown;
  //vdFaAngleLeft = faAngleLeft;
  //vdFaAngleRight = faAngleRight;

  //vdFaMapMarkerAlt = faMapMarkerAlt;
  //vdFaArchive = faArchive;
  //vdFaAsterisk = faAsterisk;

  // Icons - Footer
  //vdFaBalanceScale = faBalanceScale;
  //vdFaPlus = faPlus;
  //vdFaUserSecret = faUserSecret;
  //vdFaCircle = faCircle;

  // Icons - Main Navigation
  //vdFaBars = faBars;
  //vdFaEnvelope = faEnvelope;
  //vdFaUser = faUser;
  //vdFaUserCircle = faUserCircle;
  //vdFaSignInAlt = faSignInAlt;
  //vdFaQuestion = faQuestion;
  //vdFaWrench = faWrench;
  //vdFaCog = faCog;
  //vdFaCogs = faCogs;

  // Icons - Side Navigation (includes: vdFaEnvelope, vdFaUser, vdFaSignInAlt)
  //vdFaHome = faHome;
  //vdFaClipboardList = faClipboardList;
  //vdFaProjectDiagram = faProjectDiagram;
  //vdFaSort = faSort;

  // Constructor
  constructor(private _Logger: NGXLogger) {
    this._Logger.log(`[DEFAULT] - Application name is: ${this.appName}`);
    this._Logger.log(`[DEFAULT] - Server secrete is: ${this.serverSecrete}`);
    this._Logger.log(`[DEFAULT] - Server base api url is: ${this.serverApiUrl}`);
    this._Logger.debug('DEBUG message...');
    this._Logger.info('INFO message');
    this._Logger.log(`DEFAULT log message. App name: ${environment.CLIENT_APP_NAME}`);
    this._Logger.warn('WARNING message');
    this._Logger.error('ERROR message');
    this._Logger.fatal('FATAL message');
    this._Logger.trace('TRACE message');

    //faConfig.defaultPrefix = 'fas';
  }

  // Initialize
  ngOnInit() {
  }

}
