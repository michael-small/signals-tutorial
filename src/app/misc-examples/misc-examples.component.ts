import {Component, computed, signal} from '@angular/core';
import {JsonPipe} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import {HighlightJsDirective} from "ngx-highlight-js";

@Component({
  selector: 'app-misc-examples',
  standalone: true,
  imports: [JsonPipe, MatButtonModule, HighlightJsDirective],
  template: `
    <div id="double-example">
      <div class="text">Updating a signal with
        <pre highlight-js lang="typescript">.set()</pre>
        and
        <pre highlight-js lang="typescript">.update()</pre>.
      </div>
      <div class="text">The doubled value is <pre highlight-js lang="typescript">computed()</pre> any time <pre highlight-js lang="typescript">$value</pre> changes.
      </div>
      <button mat-flat-button color="primary" (click)="value.set(value() + 1)">$value.set($value() + 1)</button>
      <button mat-flat-button color="primary" (click)="updateValue()">$value.update(v => v + 1)</button>
      <div class="code-bg">
        <pre highlight-js lang="typescript">$value = signal(0); // {{ value() }}</pre>
        <pre highlight-js
             lang="typescript">$doubleValue = computed(() => this.$value() * 2); // {{ $doubleValue() }}</pre>
      </div>
    </div>
  `,
  styles: `
    #double-example {
      display: flex;
      flex-direction: column;
      gap: 10px;
      align-items: center;
    }


  `
})
export class MiscExamplesComponent {
  value = signal(0);

  $doubleValue = computed(() => this.value() * 2)

  updateValue() {
    this.value.update(v => v + 1)
  }
}
