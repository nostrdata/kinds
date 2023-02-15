import {
  h,
  html,
  Component,
  render
} from 'https://unpkg.com/htm/preact/standalone.module.js'

const Navbar = props => {
  return html`
          <div class="flex-1 flex flex-col">
            <nav class="px-4 flex justify-between bg-white h-16 border-b-2">
              <!-- top bar left -->
              <ul class="flex items-center">
                <!-- add button -->
                <li class="h-6 w-6">
                  <img
                    class="h-full w-full mx-auto"
                    src="images/nostr.jpg"
                    alt="nostr logo"
                  />
                </li>
              </ul>

              <ul class="flex items-center">
                <!-- add button -->
                <li>
                  <h1 class="pl-8 lg:pl-8 text-gray-700">${props.title}</h1>
                </li>
                <li>
                  <h1 class="pl-8 lg:pl-8 text-gray-700">${props.sub}</h1>
                </li>
              </ul>

              <!-- to bar right  -->
              <ul class="flex items-center"></ul>
            </nav>
          </div>
        `
}

export default Navbar
