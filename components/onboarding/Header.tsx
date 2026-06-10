export default function Header({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold md:text-5xl">
        {title}
      </h1>

      <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
        {subtitle}
      </p>
    </div>
  );
}