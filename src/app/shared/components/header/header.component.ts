import { Component } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatTooltipModule } from '@angular/material/tooltip'
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router'

@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, RouterOutlet, MatTooltipModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {

  constructor(
    private router: Router,
    private route: ActivatedRoute) {

  }

  toHome() {
    this.router.navigate(['/'], { relativeTo: null });
  }

}
