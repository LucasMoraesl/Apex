import Header from "@/components/onboarding/Header";
import Input from "../Input";
import RichOptionCard from "../RichOptionCard";
import SummaryItem from "../SummaryItem";
import { Clock, MoonStar, Target, CalendarRange } from "lucide-react";

type CardOption = {
  title: string;
  description: string;
  icon: React.ElementType;
};

type RecoveryStepProps = {
  goal: string;
  days: string[];
  restriction: string;
  setRestriction: (value: string) => void;
  otherRestriction: string;
  setOtherRestriction: (value: string) => void;
  trainingPeriod: string;
  setTrainingPeriod: (value: string) => void;
  sleep: string;
  setSleep: (value: string) => void;
  restrictionCards: CardOption[];
  trainingPeriodCards: CardOption[];
  sleepCards: CardOption[];
};

export default function RecoveryStep({
  goal,
  days,
  restriction,
  setRestriction,
  otherRestriction,
  setOtherRestriction,
  trainingPeriod,
  setTrainingPeriod,
  sleep,
  setSleep,
  restrictionCards,
  trainingPeriodCards,
  sleepCards,
}: RecoveryStepProps) {
  return (
    <div>
      <Header
        title="Nutrição e recuperação."
        subtitle="Agora vamos ajustar sua rotina para criar uma estratégia mais completa."
      />

      <div className="mt-10 space-y-10">
        <div>
          <p className="mb-4 text-sm text-zinc-400">
            Possui alguma restrição alimentar?
          </p>

          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {restrictionCards.map((item) => (
              <RichOptionCard
                key={item.title}
                title={item.title}
                description={item.description}
                Icon={item.icon}
                selected={restriction === item.title}
                onClick={() => setRestriction(item.title)}
              />
            ))}
          </div>

          {restriction === "Outra" && (
            <div className="mt-5">
              <Input
                label="Qual restrição?"
                value={otherRestriction}
                onChange={setOtherRestriction}
                placeholder="Ex: glúten, amendoim, frutos do mar..."
              />
            </div>
          )}
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-black/30 p-6">
            <p className="mb-4 text-sm text-zinc-400">
              Horário de treino
            </p>

            <div className="grid gap-3 sm:grid-cols-2">
              {trainingPeriodCards.map((item) => (
                <RichOptionCard
                  key={item.title}
                  title={item.title}
                  description={item.description}
                  Icon={item.icon}
                  selected={trainingPeriod === item.title}
                  onClick={() => setTrainingPeriod(item.title)}
                />
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-black/30 p-6">
            <p className="mb-4 text-sm text-zinc-400">
              Quantas horas você dorme?
            </p>

            <div className="grid gap-3 sm:grid-cols-2">
              {sleepCards.map((item) => (
                <RichOptionCard
                  key={item.title}
                  title={item.title}
                  description={item.description}
                  Icon={item.icon}
                  selected={sleep === item.title}
                  onClick={() => setSleep(item.title)}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-blue-500/20 bg-blue-500/10 p-6">
          <p className="text-sm font-medium text-blue-300">
            Resumo do seu plano Apex
          </p>

          <div className="mt-5 grid gap-3 md:grid-cols-2">
            <SummaryItem
              icon={Target}
              label="Objetivo"
              value={goal || "--"}
            />

            <SummaryItem
              icon={CalendarRange}
              label="Frequência"
              value={
                days.includes("Disponibilidade Variável")
                  ? "Disponibilidade variável"
                  : days.length === 1
                  ? "1 dia por semana"
                  : days.length > 1
                  ? `${days.length} dias por semana`
                  : "--"
              }
            />

            <SummaryItem
              icon={Clock}
              label="Horário"
              value={trainingPeriod || "--"}
            />

            <SummaryItem
              icon={MoonStar}
              label="Sono"
              value={sleep || "--"}
            />
          </div>

          <div className="mt-5 rounded-2xl border border-green-500/20 bg-green-500/10 p-4">
            <p className="font-medium text-green-400">
              Estratégia pronta para análise
            </p>

            <p className="mt-2 text-sm text-zinc-400">
              O Apex já possui informações suficientes para criar sua
              estratégia inicial de treino, nutrição e recuperação.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}