import { Component, Input } from "@angular/core";
import { SharedDataService } from "./../../services/shared-data.service";

@Component({
  selector: "solution-header",
  templateUrl: "header.component.html",
  styleUrls: ['header.component.css']
})
export class HeaderComponent {
  // -----------------------------------------------------------------------//
  @Input() title = "Hello";
  @Input() angularVersion: string = "";
  @Input() materialVersion: string = "";
  private websiteUrl: string = "https://iamfaisal.live/";
  // -----------------------------------------------------------------------//
  constructor(private readonly _sharedDataService: SharedDataService) {}

  onThemeChange(event) {
    this._sharedDataService.OnThemeSwitch.next(event.checked);
  }
}
