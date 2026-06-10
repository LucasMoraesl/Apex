import Header from "@/components/onboarding/Header";
import RichOptionCard from "../RichOptionCard";

type CardOption = {
  title: string;
  description: string;
  icon: React.ElementType;
};

type PersonalizationStepProps = {
  focus: string;
  setFocus: (value: string) => void;
  injuries: string;
  setInjuries: (value: string) => void;
  focusCards: CardOption[];
};

export default function PersonalizationStep({
  focus,
  setFocus,
  injuries,
  setInjuries,
  focusCards,
}: PersonalizationStepProps) {
  return (
    <div>
      <Header
        title="Personalize seu treino."
        subtitle="Defina o foco principal para que o Apex ajuste o volume e a prioridade dos exercícios."
      />

      <div className="mt-10 space-y-10">
        <div>
          <p className="mb-4 text-sm text-zinc-400">
            Qual região deseja priorizar?
          </p>

          <div className="grid gap-4 md:grid-cols-3">
            {focusCards.map((item) => (
              <RichOptionCard
                key={item.title}
                title={item.title}
                description={item.description}
                Icon={item.icon}
                selected={focus === item.title}
                onClick={() => setFocus(item.title)}
              />
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-black/30 p-6">
          <label className="mb-3 block text-sm text-zinc-400">
            Possui alguma lesão ou limitação? (Opcional)
          </label>

          <textarea
            value={injuries}
            onChange={(e) => setInjuries(e.target.value)}
            placeholder="Ex: dor no ombro, joelho, lombar, hérnia..."
            className="min-h-36 w-full resize-none rounded-2xl border border-white/10 bg-black/50 p-4 outline-none transition focus:border-blue-500"
          />

          <p className="mt-3 text-xs text-zinc-500">
            Essas informações ajudam o Apex a evitar exercícios inadequados.
          </p>
        </div>
      </div>
    </div>
  );
}