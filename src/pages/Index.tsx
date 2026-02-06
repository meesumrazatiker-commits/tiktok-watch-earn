import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  X,
  ChevronRight,
  ChevronLeft,
  Hash,
  AtSign,
  Lightbulb,
  MapPinned,
  Link2,
  Globe2,
  MoreHorizontal,
  MessageCircle,
  Send,
  Plus,
  Maximize2,
  Info,
  BadgeDollarSign,
  DollarSign,
  Coins,
  CircleDollarSign,
  Wallet,
  CreditCard,
  Banknote,
  PiggyBank,
} from "lucide-react";
import { UploadCover } from "@/components/UploadCover";
import { MoreOptionsModal } from "@/components/MoreOptionsModal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Globe } from "lucide-react";

const Index = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isLightTheme = location.pathname === "/1";
  const [showMoreOptions, setShowMoreOptions] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [watchAndEarn, setWatchAndEarn] = useState(false);
  const [isSpanish, setIsSpanish] = useState(false);
  
  // Language translations
  const translations = {
    en: {
      edit: "Edit",
      addTitle: "Add a catchy title",
      addDescription: "Describe your video",
      everyoneCanView: "Everyone can view this post",
      addLink: "Add link",
      moreOptions: "More options",
      watchAndEarn: "Watch TikToks & Earn Money",
      watchAndEarnDesc: "Enable this feature to get paid while watching videos",
      earning: "Balance",
      videos: "videos",
      each: "each",
      post: "Post",
      privacySettings: "Privacy settings",
      allowComments: "Allow comments",
      allowReuse: "Allow reuse of content",
      duetStitchDesc: "Duet, Stitch, stickers, and add to Story",
      advancedSettings: "Advanced settings",
      contentDisclosure: "Content disclosure and ads",
      addAlternativeText: "Add alternative text",
      altTextDesc: "Provide a brief description of an image for viewers using screen reader technology.",
      aiGenerated: "AI-generated content",
      audienceControls: "Audience controls",
      audienceDesc: "This video is limited to those aged 18 years and older.",
      shareTo: "Share to"
    },
    es: {
      edit: "Editar",
      addTitle: "Añade un título llamativo",
      addDescription: "Describe tu video",
      everyoneCanView: "Todos pueden ver esta publicación",
      addLink: "Añadir enlace",
      moreOptions: "Más opciones",
      watchAndEarn: "Ver TikToks y Gana Dinero",
      watchAndEarnDesc: "Activa esta función para ganar dinero viendo videos",
      earning: "Saldo",
      videos: "videos",
      each: "cada",
      post: "Publicar",
      privacySettings: "Configuración de privacidad",
      allowComments: "Permitir comentarios",
      allowReuse: "Permitir reutilización de contenido",
      duetStitchDesc: "Dúo, Stitch, stickers y agregar a Story",
      advancedSettings: "Configuración avanzada",
      contentDisclosure: "Divulgación de contenido y anuncios",
      addAlternativeText: "Añadir texto alternativo",
      altTextDesc: "Proporciona una breve descripción de una imagen para espectadores que usan tecnología de lector de pantalla.",
      aiGenerated: "Contenido generado por IA",
      audienceControls: "Controles de audiencia",
      audienceDesc: "Este video está limitado a mayores de 18 años.",
      shareTo: "Compartir en"
    }
  };

  const t = isSpanish ? translations.es : translations.en;
  const earningIcons = [
    BadgeDollarSign,
    DollarSign,
    Coins,
    CircleDollarSign,
    Wallet,
    CreditCard,
    Banknote,
    PiggyBank,
  ];
  
  // Randomly select an icon on mount
  const [selectedIcon, setSelectedIcon] = useState(() => {
    return earningIcons[Math.floor(Math.random() * earningIcons.length)];
  });
  
  // Generate random earnings data on mount
  const [earningsData, setEarningsData] = useState(() => {
    const videosWatched = Math.floor(Math.random() * 5000) + 1000; // 1000-6000 videos
    const ratePerVideo = (Math.random() * 0.5 + 0.5).toFixed(2); // $0.50-$1.00 per video
    const balance = (videosWatched * parseFloat(ratePerVideo)).toFixed(2);
    return {
      balance: parseFloat(balance),
      videosWatched,
      ratePerVideo: parseFloat(ratePerVideo)
    };
  });

  return (
    <div className={`min-h-screen overflow-y-auto ${isLightTheme ? 'bg-transparent' : 'bg-background'}`}>
      {/* <header className="sticky top-0 px-4 py-3 flex items-center justify-between">
        <button className="p-1 -ml-1">
          <X className="w-6 h-6" />
        </button>
        <button className="px-4 py-2 text-base font-medium ">Edit</button>
      </header> */}
      <header className="relative bg-card px-4 py-3 flex items-center justify-between">
        <button 
          className="p-1 -ml-1"
          onClick={() => setIsSpanish(!isSpanish)}
        >
          <X className="w-6 h-6" />
        </button>
        <button 
          className="px-4 py-2 text-base font-medium"
          onClick={() => navigate(isLightTheme ? "/" : "/1")}
        >
          {t.edit}
        </button>
      </header>

      <div className="px-4 pb-20">
        <UploadCover />

        <div className=" border-b border-border">
          <Input
            placeholder={t.addTitle}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="text-xs sm:text-xs md:text-sm placeholder:text-muted-foreground font-semibold border-0 px-0 focus-visible:ring-0"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="sr-only">
            Description
          </label>
          <Textarea
            id="description"
            name="description"
            placeholder={isSpanish ? "Escribir una descripción larga puede ayudar a obtener 3x más visitas en promedio." : "Writing a long description can help get 3x more views on average."}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="min-h-[80px] text-xs sm:text-xs md:text-sm placeholder:text-muted-foreground border-0 mb-20 px-0 resize-none focus-visible:ring-0"
          />
        </div>

        <div className="flex items-center gap-3 border-b border-border pb-4 mb-6">
          <button className="p-2 rounded-full transition-colors text-foreground/80 bg-secondary">
            <Hash className="w-5 h-5" />
          </button>
          <button className="p-2 rounded-full transition-colors text-foreground/80 bg-secondary">
            <AtSign className="w-5 h-5" />
          </button>

          <button className="flex items-center gap-0 py-1 rounded-full transition-colors bg-secondary text-secondary-foreground">
            <img
              src="/bulb2.png"
              alt="Lightbulb"
              className="-my-2.5 w-[50px] h-[50px] object-contain dark:brightness-0 dark:invert"
            />
            <span className="text-xs font-medium pr-5">Description ideas</span>
          </button>

          <button className="p-2 rounded-lg transition-colors text-foreground/80 ml-auto bg-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M7 17h3q.425 0 .713.288T11 18t-.288.713T10 19H6q-.425 0-.712-.288T5 18v-4q0-.425.288-.712T6 13t.713.288T7 14zM17 7h-3q-.425 0-.712-.288T13 6t.288-.712T14 5h4q.425 0 .713.288T19 6v4q0 .425-.288.713T18 11t-.712-.288T17 10z"
              />
            </svg>
          </button>
        </div>

        <button className="w-full flex items-start justify-between pb-4  ">
          <div className="flex items-center gap-3">
            <div className="text-left">
              <div className="flex items-center gap-2">
                <MapPinned className="w-5 h-5" />
                <div className="flex items-center gap-1">
                  <div className="font-medium text-sm mb-2">Location</div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    className="text-muted-foreground"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 16v-4m0-4h.01" />
                    </g>
                  </svg>
                </div>
              </div>

              <div className="flex gap-2 mt-2">
                <span className="px-3 py-1 rounded-lg text-xs font-medium text-foreground/70 bg-secondary">
                  Denver
                </span>
                <span className="px-3 py-1 rounded-lg text-xs font-medium text-foreground/70 bg-secondary">
                  McDonald's
                </span>
                <span className="px-3 py-1 rounded-lg text-xs font-medium text-foreground/70 bg-secondary">
                  Oklahoma
                </span>
              </div>
            </div>
          </div>
          {/* <div className="text-muted-foreground">›</div> */}
          <ChevronRight className="w-5 h-5 text-muted-foreground" />
        </button>

        <button className="w-full flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <Plus className="w-5 h-5" />
            <div className="relative">
              <span className="font-medium text-sm">{t.addLink}</span>
              <span className="absolute -top-0.3 -right-2 w-2 h-2 bg-destructive rounded-full"></span>
            </div>
          </div>
          {/* <div className="text-muted-foreground">›</div> */}
          <ChevronRight className="w-5 h-5 text-muted-foreground" />
        </button>

        <div className="flex items-start justify-between py-4">
          <div className="flex items-start gap-3 flex-1">
            {React.createElement(selectedIcon, { className: "w-7 h-7 -ml-1 text-foreground mt-0.5 flex-shrink-0" })}
            <div>
              <div className="flex -ml-1 items-center gap-2">
                <div className="font-medium text-sm">
                  {t.watchAndEarn}
                </div>
              </div>
              <p className="text-xs -ml-1 text-muted-foreground mt-1">
                {t.watchAndEarnDesc}
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
                        }`}>{t.earning}</span>
                        <span className={`text-lg font-black ${
                          isLightTheme ? 'text-gray-900' : 'text-white'
                        }`}>${earningsData.balance.toLocaleString()}</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <div className="flex items-center gap-1">
                        <span className={`text-sm font-semibold ${
                          isLightTheme ? 'text-blue-600' : 'text-tiktok-cyan'
                        }`}>{earningsData.videosWatched.toLocaleString()}</span>
                        <span className={`text-sm font-medium ${
                          isLightTheme ? 'text-gray-600' : 'text-gray-400'
                        }`}>{t.videos}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className={`text-sm font-semibold ${
                          isLightTheme ? 'text-blue-600' : 'text-tiktok-cyan'
                        }`}>${earningsData.ratePerVideo}</span>
                        <span className={`text-sm font-medium ${
                          isLightTheme ? 'text-gray-600' : 'text-gray-400'
                        }`}>{t.each}</span>
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

        <button className="w-full flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <path
                fill="currentColor"
                d="M10 .4C4.705.4.399 4.707.399 10S4.705 19.6 10 19.6c5.293 0 9.6-4.307 9.6-9.6S15.293.4 10 .4m8.188 9.6c0 1.873-.636 3.6-1.696 4.98c-.3-.234-.619-.867-.319-1.523c.303-.66.382-2.188.312-2.783c-.066-.594-.375-2.025-1.214-2.039c-.838-.012-1.413-.289-1.911-1.283c-1.033-2.068 1.939-2.465.906-3.609c-.289-.322-1.783 1.322-2.002-.869c-.014-.157.135-.392.336-.636c3.244 1.09 5.588 4.157 5.588 7.762M8.875 1.893c-.196.382-.713.537-1.027.824c-.684.619-.978.533-1.346 1.127c-.371.594-1.567 1.449-1.567 1.879s.604.936.906.838c.302-.1 1.099-.094 1.567.07c.469.166 3.914.332 2.816 3.244c-.348.926-1.873.77-2.279 2.303c-.061.225-.272 1.186-.285 1.5c-.025.486.344 2.318-.125 2.318c-.471 0-1.738-1.639-1.738-1.936s-.328-1.338-.328-2.23s-1.518-.877-1.518-2.062c0-1.068.823-1.6.638-2.113c-.181-.51-1.627-.527-2.23-.59a8.21 8.21 0 0 1 6.516-5.172M7.424 17.77c.492-.26.542-.596.988-.613c.51-.023.925-.199 1.5-.326c.51-.111 1.423-.629 2.226-.695c.678-.055 2.015.035 2.375.689a8.16 8.16 0 0 1-7.089.945"
              />
            </svg>
            <span className="font-medium text-sm">
              {t.everyoneCanView}
            </span>
          </div>
          {/* <div className="text-muted-foreground">›</div> */}
          <ChevronRight className="w-5 h-5 text-muted-foreground" />
        </button>

        <button
          className="w-full flex items-center justify-between py-4"
          onClick={() => setShowMoreOptions(true)}
        >
          <div className="flex items-center gap-3">
            <MoreHorizontal className="w-5 h-5 text-foreground" />
            <span className="font-medium text-sm text-foreground">
              {t.moreOptions}
            </span>
          </div>
          {/* <div className="text-muted-foreground">›</div> */}
          <ChevronRight className="w-5 h-5 text-muted-foreground dark:text-foreground" />
        </button>

        {/* Share To */}

        <div className="">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              {/* <img src="/share-arrows.svg" alt="Share" className="w-5 h-5" /> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M12.411 7.46c-.164-.905.878-1.533 1.602-.965l5.463 4.293a1 1 0 0 1 0 1.572l-5.463 4.293c-.724.568-1.766-.06-1.602-.966l.27-1.48c-2.154-.426-3.655-.063-4.704.558c-1.134.673-1.802 1.687-2.18 2.502l-.452-.209l.452.21c-.185.4-.609.476-.861.45c-.249-.028-.686-.203-.73-.69c-.333-3.713.716-5.99 2.587-7.202c1.637-1.06 3.79-1.222 5.868-.993zm6.447 4.114l-5.463-4.292l.372 2.046a.5.5 0 0 1-.566.584c-2.208-.333-4.359-.221-5.865.754c-1.365.884-2.324 2.564-2.176 5.654c.462-.823 1.188-1.751 2.307-2.415c1.38-.818 3.295-1.196 5.908-.569a.5.5 0 0 1 .376.576l-.356 1.954z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="font-medium text-sm">{t.shareTo}</span>
            </div>
            <div className="flex gap-3">
              <button className="w-12 h-12 rounded-full flex items-center justify-center text-foreground/80 bg-secondary">
                {/* <MessageCircle className="w-6 h-6" /> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m4.16 21.633l-.002.002l-.79.741l1.076.12a7.8 7.8 0 0 0 2.691-.199c.891-.234 1.828-.688 2.422-1.532c.786.154 1.604.235 2.443.235c6 0 11-4.184 11-9.5S18 2 12 2S1 6.184 1 11.5c0 3.236 1.866 6.065 4.668 7.77c-.086.471-.377.994-.723 1.462a8 8 0 0 1-.773.89z"
                  />
                </svg>
              </button>
              <button className="w-12 h-12 rounded-full flex items-center justify-center text-foreground/80 bg-secondary">
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 px-4 py-3 flex gap-3">
        <Button
          variant="secondary"
          className="flex-1 h-12 text-sm font-bold flex items-center justify-center"
        >
          <img
            src="/draft.png"
            alt="Draft"
            className="w-5 h-5 -mr-1 brightness-0 invert"
          />
          Drafts
        </Button>
        <Button className="flex-1 h-12 bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-normal flex items-center justify-center">
          <img
            src="/postarrow.png"
            alt="PostArrow"
            className="w-9 h-9 -ml-2 -mr-3"
          />
          {t.post}
        </Button>
      </div>

        <MoreOptionsModal 
          isOpen={showMoreOptions} 
          onClose={() => setShowMoreOptions(false)}
          earningsData={earningsData}
          isLightTheme={isLightTheme}
          selectedIcon={selectedIcon}
          isSpanish={isSpanish}
        />
    </div>
  );
};

export default Index;
