import React, { useState } from "react";
import {
  X,
  Type,
  Bot,
  ShoppingBag,
  Download,
  Droplets,
  ShieldAlert,
  MessageSquare,
  Megaphone,
  FileText,
  Quote,
  BadgeDollarSign,
  DollarSign,
  Coins,
  CircleDollarSign,
  Wallet,
  CreditCard,
  Banknote,
  PiggyBank,
  ChevronRight,
} from "lucide-react";
import { Switch } from "@/components/ui/switch";

interface MoreOptionsModalProps {
  isOpen: boolean;
  onClose: () => void;
  earningsData?: {
    balance: number;
    videosWatched: number;
    ratePerVideo: number;
  };
  isLightTheme?: boolean;
  selectedIcon?: React.ComponentType<any>;
}

export const MoreOptionsModal = ({
  isOpen,
  onClose,
  earningsData,
  isLightTheme,
  selectedIcon,
}: MoreOptionsModalProps) => {
  const [aiGenerated, setAiGenerated] = useState(false);
  const [identifyProducts, setIdentifyProducts] = useState(true);
  const [saveToDevice, setSaveToDevice] = useState(false);
  const [saveWithWatermark, setSaveWithWatermark] = useState(false);
  const [audienceControls, setAudienceControls] = useState(false);
  const [allowComments, setAllowComments] = useState(true);
  const [allowReuse, setAllowReuse] = useState(true);
  const [watchAndEarn, setWatchAndEarn] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-end">
      <div className="bg-card w-full rounded-t-3xl max-h-[71vh] overflow-y-auto pb-8">
        <div className="sticky top-0 bg-card border-b border-border px-4 py-3 flex items-center justify-center">
          <h2 className="text-xl font-bold text-black dark:text-white">
            More options
          </h2>
          <button onClick={onClose} className="p-1 absolute right-4">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="px-4 py-2 space-y-6">
          <div>
            <h3 className="text-xs font-semibold text-muted-foreground mb-2">
              Privacy settings
            </h3>

            <div className="space-y-4">
              <div className="flex items-center justify-between py-1">
                <div className="flex items-center gap-3">
                  <MessageSquare className="w-5 h-5" />
                  <span className="font-medium text-sm">Allow comments</span>
                </div>
                <Switch
                  checked={allowComments}
                  onCheckedChange={setAllowComments}
                />
              </div>
              <div className="flex items-start justify-between py-2">
                <div className="flex items-start gap-3 flex-1">
                  <img
                    src="/video6.png"
                    alt="Video"
                    className="w-5 h-5  mt-1 dark:brightness-0 dark:invert"
                  />
                  <div>
                    <div className="font-medium text-sm">
                      Allow reuse of content
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Duet, Stitch, stickers, and add to Story
                    </p>
                  </div>
                </div>
                <Switch checked={allowReuse} onCheckedChange={setAllowReuse} />
              </div>
            </div>
          </div>

          {/* Advanced Settings */}
          <div>
            <h3 className="text-xs font-semibold text-muted-foreground mb-1">
              Advanced settings
            </h3>

            <div className="space-y-4">
              <button className="flex items-center justify-between w-full py-0">
                <div className="flex items-center gap-1">
                  <img
                    src="/star2.png"
                    alt="Star"
                    className="w-9 h-9 -ml-2 dark:brightness-0 dark:invert"
                  />
                  <span className="font-medium text-sm">
                    Content disclosure and ads
                  </span>
                </div>
                <ChevronRight className="w-5 h-5 text-muted-foreground" />
              </button>

              <div className="flex items-start justify-between py-2">
                <div className="flex items-start gap-3 flex-1">
                  {React.createElement(selectedIcon || BadgeDollarSign, { className: "w-7 h-7 -ml-1 text-foreground mt-0.5 flex-shrink-0" })}
                  <div>
                    <div className="flex -ml-1 items-center gap-2">
                      <div className="font-medium text-sm">
                        Watch TikToks & Earn
                      </div>
                    </div>
                    <p className="text-xs -ml-1 text-muted-foreground mt-1">
                      Enable this feature to get paid while watching videos
                    </p>
                    {watchAndEarn && (
                      <div className={`mt-2 p-3 rounded-xl shadow-lg border ${
                        isLightTheme 
                          ? 'bg-white/10 backdrop-blur-md border-white/20 shadow-black/10' 
                          : 'bg-gradient-to-r from-black via-gray-900 to-black shadow-pink-500/20 border-pink-500/30'
                      }`}>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="relative">
                              <div className="w-3 h-3 bg-pink-500 rounded-full animate-pulse"></div>
                              <div className="absolute inset-0 w-3 h-3 bg-pink-500 rounded-full animate-ping opacity-75"></div>
                            </div>
                            <div className="flex flex-col">
                              <span className={`text-xs font-bold uppercase tracking-wide ${
                                isLightTheme ? 'text-gray-700' : 'text-pink-400'
                              }`}>Earning</span>
                              <span className={`text-lg font-black ${
                                isLightTheme ? 'text-gray-900' : 'text-white'
                              }`}>${earningsData?.balance?.toLocaleString() || '1,802'}</span>
                            </div>
                          </div>
                          <div className="flex flex-col items-end gap-1">
                            <div className="flex items-center gap-1">
                              <span className={`text-sm font-semibold ${
                                isLightTheme ? 'text-blue-600' : 'text-tiktok-cyan'
                              }`}>{earningsData?.videosWatched?.toLocaleString() || '2,011'}</span>
                              <span className={`text-sm font-medium ${
                                isLightTheme ? 'text-gray-600' : 'text-gray-400'
                              }`}>videos</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <span className={`text-sm font-semibold ${
                                isLightTheme ? 'text-blue-600' : 'text-tiktok-cyan'
                              }`}>${earningsData?.ratePerVideo || '0.89'}</span>
                              <span className={`text-sm font-medium ${
                                isLightTheme ? 'text-gray-600' : 'text-gray-400'
                              }`}>each</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <Switch
                  checked={watchAndEarn}
                  onCheckedChange={setWatchAndEarn}
                />
              </div>

              
              <button className="flex items-start justify-between w-full py-2">
                <div className="flex items-start gap-3 text-left">
                  {/* <FileText className="w-5 h-5 mt-0.5" /> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 14 14"
                    className="mt-0.5 flex-shrink-0"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                    >
                      <path d="M13.207.793a1 1 0 0 1 .293.707v11a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1h11a1 1 0 0 1 .707.293m-2.76 4.412v3.59M9.25 5.205h2.394" />
                      <path d="M6.747 5.205v3.59h2.095m-6.592 0l1.102-3.307a.415.415 0 0 1 .394-.283v0c.179 0 .337.114.394.283l1.102 3.307M2.649 7.598h2.194" />
                    </g>
                  </svg>
                  <div>
                    <div className="font-medium text-sm">
                      Add alternative text
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Provide a brief description of an image for viewers using
                      screen reader technology.
                    </p>
                  </div>
                </div>
                {/* <div className="text-muted-foreground">coomand›</div> */}
                <ChevronRight className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
              </button>

              <div className="flex items-start justify-between py-2">
                <div className="flex items-start gap-3 flex-1">
                  {/* <Bot className="w-5 h-5 mt-0.5" /> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    className="mt-0.5 flex-shrink-0"
                  >
                    <path
                      fill="currentColor"
                      d="M13.5 2c0 .444-.193.843-.5 1.118V5h5a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h5V3.118A1.5 1.5 0 1 1 13.5 2M6 7a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1zm-4 3H0v6h2zm20 0h2v6h-2zM9 14.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m6 0a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3"
                    />
                  </svg>
                  <div>
                    <div className="font-medium text-sm">
                      AI-generated content
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Add this label to tell viewers your content was generated
                      or edited with AI.{" "}
                      {/* <span className="font-semibold">Learn more</span> */}
                      <span className=" cursor-pointer font-medium text-xs text-black dark:text-white whitespace-nowrap">
                        Learn more
                      </span>
                    </p>
                  </div>
                </div>
                <Switch
                  checked={aiGenerated}
                  onCheckedChange={setAiGenerated}
                />
              </div>

              <div className="flex items-start justify-between py-2">
                <div className="flex items-start gap-3 flex-1">
                  {/* <ShoppingBag className="w-5 h-5 mt-0.5" /> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    className="mt-0.5 flex-shrink-0"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    >
                      <path d="M3.977 9.84A2 2 0 0 1 5.971 8h12.058a2 2 0 0 1 1.994 1.84l.803 10A2 2 0 0 1 18.833 22H5.167a2 2 0 0 1-1.993-2.16z" />
                      <path d="M16 11V6a4 4 0 0 0-4-4v0a4 4 0 0 0-4 4v5" />
                    </g>
                  </svg>
                  <div>
                    <div className="font-medium text-sm">
                      Identify similar products
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Allow items similar to the ones in your videos to be
                      identified so users can shop for them in TikTok Shop.{" "}
                      {/* <span className="font-semibold">Learn more</span> */}
                      <span className=" cursor-pointer font-medium text-xs text-black dark:text-white whitespace-nowrap">
                        Learn more
                      </span>
                    </p>
                  </div>
                </div>
                <Switch
                  checked={identifyProducts}
                  onCheckedChange={setIdentifyProducts}
                />
              </div>

              <div className="flex items-start justify-between py-2">
                <div className="flex items-start gap-3 flex-1">
                  {/* <Download className="w-5 h-5 mt-0.5" /> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 512 512"
                    className="mt-0.5 flex-shrink-0"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="32"
                      d="M336 176h40a40 40 0 0 1 40 40v208a40 40 0 0 1-40 40H136a40 40 0 0 1-40-40V216a40 40 0 0 1 40-40h40"
                    />
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="32"
                      d="m176 272l80 80l80-80M256 48v288"
                    />
                  </svg>
                  <div>
                    <div className="font-medium text-sm">Save to device</div>
                    <p className="text-xs text-muted-foreground">
                      Your post will be saved to device, unless a violation of
                      Community Guideline is found.
                    </p>
                  </div>
                </div>
                <Switch
                  checked={saveToDevice}
                  onCheckedChange={setSaveToDevice}
                />
              </div>

              <div className="flex items-start justify-between py-2">
                <div className="flex items-start gap-3 flex-1">
                  {/* <Droplets className="w-5 h-5 mt-0.5" /> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 14 14"
                    className="mt-0.5 flex-shrink-0"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M3.897 1.708C4.924 1.594 5.955 1.5 7 1.5s2.076.094 3.103.208a2.505 2.505 0 0 1 2.2 2.205c.109 1.02.197 2.047.197 3.087s-.088 2.067-.197 3.087a2.505 2.505 0 0 1-2.2 2.205c-1.027.114-2.058.208-3.103.208s-2.076-.094-3.103-.208a2.505 2.505 0 0 1-2.2-2.205C1.588 9.067 1.5 8.04 1.5 7s.088-2.067.197-3.087a2.505 2.505 0 0 1 2.2-2.205M7 .25c-1.115 0-2.202.1-3.24.215A3.755 3.755 0 0 0 .453 3.78C.344 4.813.25 5.893.25 7s.094 2.187.204 3.22a3.755 3.755 0 0 0 3.305 3.314c1.039.116 2.126.216 3.241.216s2.202-.1 3.24-.215a3.755 3.755 0 0 0 3.306-3.316c.11-1.032.204-2.112.204-3.219s-.094-2.187-.204-3.22A3.755 3.755 0 0 0 10.241.465C9.202.35 8.115.25 7 .25m1.379 3.017a.75.75 0 0 0-1.48.17v5.176a1.2 1.2 0 1 1-1.201-1.2a.75.75 0 0 0 0-1.5a2.7 2.7 0 1 0 2.7 2.7V5.864c.521.339 1.148.52 1.855.52a.75.75 0 0 0 0-1.5c-.55 0-.943-.169-1.228-.423c-.294-.262-.522-.661-.646-1.194"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div>
                    <div className="font-medium text-sm">
                      Save posts with watermark
                    </div>
                    <p className="text-xs text-muted-foreground">
                      This only affects videos or photos posted by you.
                    </p>
                  </div>
                </div>
                <Switch
                  checked={saveWithWatermark}
                  onCheckedChange={setSaveWithWatermark}
                />
              </div>

              <div className="flex items-start justify-between py-2 gap-2">
                <div className="flex items-start gap-3 flex-1 min-w-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    className="mt-0.5 flex-shrink-0"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 6.362A9.7 9.7 0 0 1 12 5c6.307 0 9.367 5.683 9.91 6.808c.06.123.06.261 0 .385c-.352.728-1.756 3.362-4.41 5.131M14 18.8a10 10 0 0 1-2 .2c-6.307 0-9.367-5.683-9.91-6.808a.44.44 0 0 1 0-.386c.219-.452.84-1.632 1.91-2.885m6 .843A3 3 0 0 1 14.236 14M3 3l18 18"
                    />
                  </svg>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-sm">
                        Audience controls
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        className="text-muted-foreground flex-shrink-0"
                      >
                        <path
                          fill="currentColor"
                          d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16m-1-5h2v2h-2zm2-1.645V14h-2v-1.5a1 1 0 0 1 1-1a1.5 1.5 0 1 0-1.471-1.794l-1.962-.393A3.501 3.501 0 1 1 13 13.355"
                        />
                      </svg>
                    </div>
                    <p className="text-xs sm:text-xs text-muted-foreground">
                      This video is limited to those aged 18 years and older.
                    </p>
                  </div>
                </div>
                <Switch
                  checked={audienceControls}
                  onCheckedChange={setAudienceControls}
                  className="flex-shrink-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
