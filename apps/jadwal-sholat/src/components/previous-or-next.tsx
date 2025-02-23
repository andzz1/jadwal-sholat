import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { P, match } from "ts-pattern";
import { SuratProps } from "~interfaces";
import { removeSelectedSurat } from "~lib/helpers";
import { cn } from "~lib/utils/cn";

import { Button } from "./ui/button";

export default function PreviousOrNext({ data }: SuratProps) {
  return (
    <div
      className={cn(
        "flex w-full space-x-3",
        data.number > 1 ? "justify-between" : "justify-end"
      )}
    >
      {match(data)
        .with({ number: P.when((number) => number > 1) }, () => (
          <Link href={`/quran/surat/${data.number - 1}`}>
            <Button
              onClick={removeSelectedSurat}
              type="button"
              aria-label="Previous"
              className={cn("flex items-center justify-center space-x-1")}
            >
              <ArrowLeft size={20} />
              <p className="text-base font-bold">Previous</p>
            </Button>
          </Link>
        ))
        .otherwise(() => null)}
      {match(data)
        .with({ number: P.when((number) => number < 114) }, () => (
          <Link href={`/quran/surat/${data.number + 1}`}>
            <Button
              type="button"
              aria-label="next"
              onClick={removeSelectedSurat}
              className={cn(
                "flex items-center justify-center space-x-1 rounded-md"
              )}
            >
              <p className="text-base font-bold">Next</p>
              <ArrowRight size={20} />
            </Button>
          </Link>
        ))
        .otherwise(() => null)}
    </div>
  );
}
