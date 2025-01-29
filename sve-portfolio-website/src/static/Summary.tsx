const Summary = () => {
  return (
    <>
      <p className="text-4xl mb-8">About me</p>
      <article
        className="desktop:text-xl mobile:text-md"
        itemScope
        itemType="https://schema.org/author"
      >
        <p className="mb-5">
          I&apos;m a music technologist/software developer with a bachelors
          degree in Music Technology from the HKU, Utrecht.{" "}
        </p>
      </article>
    </>
  );
};

export default Summary;
