import Link from "next/link";

import { Icons } from "@/components/shared/icons";
import { Button, buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn, nFormatter } from "@/lib/utils";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import UserNav from "@/components/UserNav";
import ButtonSignInFacebook from "@/components/ButtonSignInFacebook";

export default async function LandingPage() {
  return (
    <div className="flex flex-grow overflow-hidden">
      <div className="hidden w-64 flex-none sm:block">
        <div className="flex h-full w-full flex-col overflow-hidden border-r border-gray-600/10 bg-gray-50 pt-4">
          <div className="flex-grow overflow-y-auto pb-4">
            <div className="mb-4 w-full overflow-hidden truncate border-b px-4 pb-2">
              <div>
                <button
                  id="headlessui-menu-button-5"
                  type="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                  className="w-full overflow-hidden truncate"
                >
                  <div className="flex w-full items-center gap-2 overflow-hidden truncate">
                    <div className="flex-none p-0.5 bg-gradient-to-br from-blue-100 to-primary rounded-full">
                      <div className="rounded-full">
                        <div className="sj-avatar-container  svelte-1xrnfoh">
                          <img
                            src="https://senja-lh3.b-cdn.net/a/ACg8ocLWSbxoIt8ajBaV7bqVLA1qK26UAI10yeLQogeMddBv1Z8=s96-c?width=54&amp;height=54&amp;format=webp"
                            alt="Thiago avatar"
                            className=" svelte-1xrnfoh"
                            loading="lazy"
                            referrerPolicy="no-referrer"
                            style={{ width: "36px", height: "36px" }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex w-full flex-grow flex-col items-start overflow-hidden truncate text-left">
                      <div className="flex w-full truncate text-left">
                        <div className="truncate text-sm font-medium">
                          Thiago{" "}
                        </div>
                      </div>
                      <div className="text-primary w-full gap-1 overflow-hidden truncate rounded-full text-xs font-medium">
                        <div>Free plan</div>
                      </div>
                    </div>{" "}
                    <div className="mt-1 self-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className=""
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </div>
                  </div>
                </button>{" "}
              </div>
            </div>{" "}
            <div className="px-4">
              <div className="mb-4">
                {" "}
                <nav className="flex flex-col gap-0">
                  <button
                    type="button"
                    className="relative flex mb-[1px] items-center gap-3 rounded-md px-2 py-[5px] text-left text-sm font-medium text-zinc-600 duration-100 hover:bg-zinc-200/70"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary-200"
                    >
                      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                    </svg>{" "}
                    <div className="text-primary-200">Upgrade</div>{" "}
                    <div className="flex-grow"></div>{" "}
                  </button>
                  <button
                    type="button"
                    className="relative flex mb-[1px] items-center gap-3 rounded-md px-2 py-[5px] text-left text-sm font-medium text-zinc-600 duration-100 hover:bg-zinc-200/70"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-zinc-500"
                    >
                      <polyline points="20 12 20 22 4 22 4 12"></polyline>
                      <rect x="2" y="7" width="20" height="5"></rect>
                      <line x1="12" y1="22" x2="12" y2="7"></line>
                      <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path>
                      <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
                    </svg>{" "}
                    <div>Earn $50</div> <div className="flex-grow"></div>{" "}
                  </button>
                  <a
                    href="https://chromewebstore.google.com/detail/senja-testimonial-extensi/lmldakdjelendidnmaieidggbffljlle"
                    target="_blank"
                    className="relative flex mb-[1px] items-center gap-3 rounded-md px-2 py-[5px] text-left text-sm font-medium text-zinc-600 duration-100 hover:bg-zinc-200/70"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      fill="none"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="text-zinc-500"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <circle cx="12" cy="12" r="4"></circle>
                      <line x1="21.17" x2="12" y1="8" y2="8"></line>
                      <line x1="3.95" x2="8.54" y1="6.06" y2="14"></line>
                      <line x1="10.88" x2="15.46" y1="21.94" y2="14"></line>
                    </svg>{" "}
                    <div>Chrome extension</div>{" "}
                    <div className="flex-grow"></div>{" "}
                  </a>
                </nav>{" "}
              </div>
              <div className="mb-4">
                <div className="mb-2 px-2 font-heading text-[0.7rem] font-extrabold uppercase tracking-wider text-zinc-400">
                  Collect
                </div>{" "}
                <nav className="flex flex-col gap-0">
                  <a
                    href="/forms"
                    className="relative flex mb-[1px] items-center gap-3 rounded-md px-2 py-[5px] text-left text-sm font-medium text-zinc-600 duration-100 hover:bg-zinc-200/70"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      fill="none"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="text-zinc-500"
                    >
                      <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
                      <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
                    </svg>{" "}
                    <div>Forms</div> <div className="flex-grow"></div>{" "}
                  </a>
                  <a
                    href="/import"
                    className="relative flex mb-[1px] items-center gap-3 rounded-md px-2 py-[5px] text-left text-sm font-medium text-zinc-600 duration-100 hover:bg-zinc-200/70"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      fill="none"
                      stroke-width="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-zinc-500"
                    >
                      <path d="M12 3v12"></path>
                      <path d="m8 11 4 4 4-4"></path>
                      <path d="M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4"></path>
                    </svg>{" "}
                    <div>Import testimonials</div>{" "}
                    <div className="flex-grow"></div>{" "}
                  </a>
                </nav>{" "}
              </div>
              <div className="mb-4">
                <div className="mb-2 px-2 font-heading text-[0.7rem] font-extrabold uppercase tracking-wider text-zinc-400">
                  Manage
                </div>{" "}
                <nav className="flex flex-col gap-0">
                  <a
                    href="/"
                    className="relative flex mb-[1px] items-center gap-3 rounded-md px-2 py-[5px] text-left text-sm font-medium text-zinc-600 duration-100 hover:bg-zinc-200/70"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      fill="none"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="text-zinc-500"
                    >
                      <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
                    </svg>{" "}
                    <div>Testimonials</div> <div className="flex-grow"></div>{" "}
                  </a>
                  <a
                    href="/tags"
                    className="relative flex mb-[1px] items-center gap-3 rounded-md px-2 py-[5px] text-left text-sm font-medium text-zinc-600 duration-100 hover:bg-zinc-200/70 bg-zinc-200/70"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      fill="none"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="text-zinc-500"
                    >
                      <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z"></path>
                      <path d="M7 7h.01"></path>
                    </svg>{" "}
                    <div>Tags</div> <div className="flex-grow"></div>{" "}
                  </a>
                  <a
                    href="/settings/members"
                    className="relative flex mb-[1px] items-center gap-3 rounded-md px-2 py-[5px] text-left text-sm font-medium text-zinc-600 duration-100 hover:bg-zinc-200/70"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      fill="none"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="text-zinc-500"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>{" "}
                    <div>Team</div> <div className="flex-grow"></div>{" "}
                  </a>
                </nav>{" "}
              </div>
              <div className="mb-4">
                <div className="mb-2 px-2 font-heading text-[0.7rem] font-extrabold uppercase tracking-wider text-zinc-400">
                  Share
                </div>{" "}
                <nav className="flex flex-col gap-0">
                  <a
                    href="/studio"
                    className="relative flex mb-[1px] items-center gap-3 rounded-md px-2 py-[5px] text-left text-sm font-medium text-zinc-600 duration-100 hover:bg-zinc-200/70"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      fill="none"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="text-zinc-500"
                    >
                      <path d="m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08"></path>
                      <path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z"></path>
                    </svg>{" "}
                    <div>Studio</div> <div className="flex-grow"></div>{" "}
                  </a>
                  <a
                    href="/studio/brand"
                    className="relative flex mb-[1px] items-center gap-3 rounded-md px-2 py-[5px] text-left text-sm font-medium text-zinc-600 duration-100 hover:bg-zinc-200/70"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      fill="none"
                      stroke-width="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-zinc-500"
                    >
                      <circle cx="13.5" cy="6.5" r=".5"></circle>
                      <circle cx="17.5" cy="10.5" r=".5"></circle>
                      <circle cx="8.5" cy="7.5" r=".5"></circle>
                      <circle cx="6.5" cy="12.5" r=".5"></circle>
                      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path>
                    </svg>{" "}
                    <div>Brand</div> <div className="flex-grow"></div>{" "}
                    <div className="rounded-full px-2 text-[10px] font-medium text-gray-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className=""
                      >
                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                      </svg>
                    </div>{" "}
                  </a>
                  <a
                    href="/rich-snippet"
                    className="relative flex mb-[1px] items-center gap-3 rounded-md px-2 py-[5px] text-left text-sm font-medium text-zinc-600 duration-100 hover:bg-zinc-200/70"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      fill="none"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="text-zinc-500"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>{" "}
                    <div>Rich snippet</div> <div className="flex-grow"></div>{" "}
                    <div className="rounded-full px-2 text-[10px] font-medium text-gray-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className=""
                      >
                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                      </svg>
                    </div>{" "}
                  </a>
                  <a
                    href="/settings/domain"
                    className="relative flex mb-[1px] items-center gap-3 rounded-md px-2 py-[5px] text-left text-sm font-medium text-zinc-600 duration-100 hover:bg-zinc-200/70"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      fill="none"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="text-zinc-500"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="2" y1="12" x2="22" y2="12"></line>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                    </svg>{" "}
                    <div>Custom domain</div> <div className="flex-grow"></div>{" "}
                    <div className="rounded-full px-2 text-[10px] font-medium text-gray-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className=""
                      >
                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                      </svg>
                    </div>{" "}
                  </a>
                </nav>{" "}
              </div>
              <div className="mb-4">
                <div className="mb-2 px-2 font-heading text-[0.7rem] font-extrabold uppercase tracking-wider text-zinc-400">
                  Analyze
                </div>{" "}
                <nav className="flex flex-col gap-0">
                  <a
                    href="/analyze"
                    className="relative flex mb-[1px] items-center gap-3 rounded-md px-2 py-[5px] text-left text-sm font-medium text-zinc-600 duration-100 hover:bg-zinc-200/70"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      fill="none"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="text-zinc-500"
                    >
                      <path d="M5 3a2 2 0 0 0-2 2"></path>
                      <path d="M19 3a2 2 0 0 1 2 2"></path>
                      <path d="M21 19a2 2 0 0 1-2 2"></path>
                      <path d="M5 21a2 2 0 0 1-2-2"></path>
                      <path d="M9 3h1"></path>
                      <path d="M9 21h1"></path>
                      <path d="M14 3h1"></path>
                      <path d="M14 21h1"></path>
                      <path d="M3 9v1"></path>
                      <path d="M21 9v1"></path>
                      <path d="M3 14v1"></path>
                      <path d="M21 14v1"></path>
                      <line x1="7" x2="15" y1="8" y2="8"></line>
                      <line x1="7" x2="17" y1="12" y2="12"></line>
                      <line x1="7" x2="13" y1="16" y2="16"></line>
                    </svg>{" "}
                    <div>Analyze</div> <div className="flex-grow"></div>{" "}
                  </a>
                </nav>{" "}
              </div>
              <div className="mb-4">
                <div className="mb-2 px-2 font-heading text-[0.7rem] font-extrabold uppercase tracking-wider text-zinc-400">
                  Automate
                </div>{" "}
                <nav className="flex flex-col gap-0">
                  <a
                    href="/automations"
                    className="relative flex mb-[1px] items-center gap-3 rounded-md px-2 py-[5px] text-left text-sm font-medium text-zinc-600 duration-100 hover:bg-zinc-200/70"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      fill="none"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="text-zinc-500"
                    >
                      <rect width="8" height="8" x="3" y="3" rx="2"></rect>
                      <path d="M7 11v4a2 2 0 0 0 2 2h4"></path>
                      <rect width="8" height="8" x="13" y="13" rx="2"></rect>
                    </svg>{" "}
                    <div>Automate</div> <div className="flex-grow"></div>{" "}
                    <div className="rounded-full px-2 text-[10px] font-medium text-gray-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className=""
                      >
                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                      </svg>
                    </div>{" "}
                  </a>
                </nav>{" "}
              </div>
              <div className="mb-4">
                <div className="mb-2 px-2 font-heading text-[0.7rem] font-extrabold uppercase tracking-wider text-zinc-400">
                  Product
                </div>{" "}
                <nav className="flex flex-col gap-0">
                  <button
                    type="button"
                    className="relative flex mb-[1px] items-center gap-3 rounded-md px-2 py-[5px] text-left text-sm font-medium text-zinc-600 duration-100 hover:bg-zinc-200/70"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      fill="none"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="text-zinc-500"
                    >
                      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
                      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
                    </svg>{" "}
                    <div>Whats new</div> <div className="flex-grow"></div>{" "}
                  </button>
                  <a
                    href="https://feedback.senja.io"
                    target="_blank"
                    className="relative flex mb-[1px] items-center gap-3 rounded-md px-2 py-[5px] text-left text-sm font-medium text-zinc-600 duration-100 hover:bg-zinc-200/70"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      fill="none"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="text-zinc-500"
                    >
                      <path d="M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z"></path>
                      <path d="M15 3v6h6"></path>
                      <path d="M10 16s.8 1 2 1c1.3 0 2-1 2-1"></path>
                      <path d="M8 13h0"></path>
                      <path d="M16 13h0"></path>
                    </svg>{" "}
                    <div>Feedback</div> <div className="flex-grow"></div>{" "}
                  </a>
                  <button
                    type="button"
                    className="relative flex mb-[1px] items-center gap-3 rounded-md px-2 py-[5px] text-left text-sm font-medium text-zinc-600 duration-100 hover:bg-zinc-200/70"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      fill="none"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="text-zinc-500"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                      <line x1="12" y1="17" x2="12.01" y2="17"></line>
                    </svg>{" "}
                    <div>Help</div> <div className="flex-grow"></div>{" "}
                  </button>
                </nav>{" "}
              </div>
            </div>
          </div>{" "}
          <div className="relative">
            <button className="w-full border-t px-4 py-4 text-left text-sm font-medium">
              <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 flex-none flex-col justify-center rounded-md bg-zinc-200 p-1">
                  <img
                    src="https://www.google.com/s2/favicons?sz=64&amp;domain_url=https://template-3ys.vercel.app/pt"
                    alt=""
                    className=""
                    width="100%"
                    height="100%"
                  />
                </div>{" "}
                <div className="truncate">
                  <div className="truncate">Vercel</div>
                </div>{" "}
                <div className="flex-grow"></div>{" "}
                <a
                  href="/settings"
                  className="-mr-1 rounded-md p-1 hover:bg-black/5"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="text-zinc-400"
                  >
                    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </a>{" "}
                <div>
                  <button
                    id="headlessui-popover-button-2"
                    type="button"
                    aria-expanded="false"
                    className="-mr-1 rounded-md p-1 hover:bg-black/5"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      fill="none"
                      stroke-width="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-zinc-400"
                    >
                      <path d="m7 15 5 5 5-5"></path>
                      <path d="m7 9 5-5 5 5"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="relative h-full flex-grow overflow-y-scroll px-6 sm:px-10 w-[1100px]"></div>
    </div>
  );
}
