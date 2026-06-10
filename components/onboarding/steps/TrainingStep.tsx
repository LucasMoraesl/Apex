import { Clock } from "lucide-react";
import Header from "@/components/onboarding/Header";
import OptionCard from "../OptionCard";
import RichOptionCard from "../RichOptionCard";

type CardOption = {
  title: string;
  description: string;
  icon: React.ElementType;
};

type TrainingStepProps = {
  experience: string;
  setExperience: (value: string) => void;
  days: string[];
  toggleDay: (day: string) => void;
  workoutTime: string;
  setWorkoutTime: (value: string) => void;
  location: string;
  setLocation: (value: string) => void;
  experienceCards: CardOption[];
  weekDays: string[];
  workoutTimes: string[];
  locationCards: CardOption[];
};

export default function TrainingStep({
  experience,
  setExperience,
  days,
  toggleDay,
  workoutTime,
  setWorkoutTime,
  location,
  setLocation,
  experienceCards,
  weekDays,
  workoutTimes,
  locationCards,
}: TrainingStepProps) {
  return (
    <div>
      <Header
        title="Como é sua rotina de treino?"
        subtitle="Com sua disponibilidade, o Apex monta uma divisão inteligente para sua semana."
      />

      <div className="mt-10 space-y-10">
        <div>
          <p className="mb-4 text-sm text-zinc-400">
            Qual seu nível de experiência?
          </p>

          <div className="grid gap-4 md:grid-cols-3">
            {experienceCards.map((item) => (
              <RichOptionCard
                key={item.title}
                title={item.title}
                description={item.description}
                Icon={item.icon}
                selected={experience === item.title}
                onClick={() => setExperience(item.title)}
              />
            ))}
          </div>
        </div>

        <div>
          <p className="mb-4 text-sm text-zinc-400">
            Quais dias você pode treinar?
          </p>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {weekDays.map((day) => (
              <OptionCard
                key={day}
                label={day}
                selected={days.includes(day)}
                onClick={() => toggleDay(day)}
              />
            ))}
          </div>
        </div>

        <div>
          <p className="mb-4 text-sm text-zinc-400">
            Quanto tempo você tem por treino?
          </p>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
            {workoutTimes.map((time) => (
              <button
                key={time}
                type="button"
                onClick={() => setWorkoutTime(time)}
                className={`rounded-2xl border p-4 text-center transition-all duration-300 ${
                  workoutTime === time
                    ? "border-blue-500 bg-blue-500/10 text-white shadow-[0_0_35px_rgba(37,99,235,0.2)]"
                    : "border-white/10 bg-black/40 text-zinc-300 hover:border-blue-500/50 hover:bg-zinc-900"
                }`}
              >
                <Clock className="mx-auto mb-2 h-5 w-5 text-blue-400" />
                <span className="font-semibold">{time}</span>
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-4 text-sm text-zinc-400">
            Onde você treina?
          </p>

          <div className="grid gap-4 md:grid-cols-3">
            {locationCards.map((item) => (
              <RichOptionCard
                key={item.title}
                title={item.title}
                description={item.description}
                Icon={item.icon}
                selected={location === item.title}
                onClick={() => setLocation(item.title)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}