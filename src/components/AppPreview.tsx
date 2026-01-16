import appPreviewPhones from '@/assets/app-preview-phones.png';

const AppPreview = () => {
  return (
    <section className="relative mt-0 overflow-hidden py-4 md:py-6">
      {/* Top gradient fade for smooth transition */}
      <div className="pointer-events-none absolute left-0 right-0 top-0 h-24 bg-gradient-to-b from-background to-transparent" />
      
      <div className="container relative z-10 mx-auto">
        <div className="flex justify-center">
          <img
            src={appPreviewPhones}
            alt="Fullwin App Preview"
            className="max-w-full md:max-w-4xl lg:max-w-5xl"
          />
        </div>
      </div>
    </section>
  );
};

export default AppPreview;
