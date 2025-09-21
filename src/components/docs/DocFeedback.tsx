"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Check, MessageSquare, Send, ThumbsDown, ThumbsUp } from "lucide-react";

interface DocFeedbackProps {
  slug: string;
}

type FeedbackState = 'idle' | 'positive' | 'negative' | 'submitted';

export function DocFeedback({ slug }: DocFeedbackProps) {
  const [state, setState] = useState<FeedbackState>('idle');
  const [comments, setComments] = useState('');

  const handlePositive = () => {
    setState('submitted');
  };

  const handleNegative = () => {
    setState('negative');
  };

  const handleSubmit = () => {
    setState('submitted');
  };

  return (
    <section className="mt-16 rounded-xl border bg-muted/40 p-6" data-doc-slug={slug}>
      <div className="mb-3 flex items-center gap-2">
        <MessageSquare className="h-5 w-5 text-muted-foreground" aria-hidden />
        <h2 className="text-lg font-semibold">Was this guide helpful?</h2>
      </div>

      {state === 'submitted' ? (
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Check className="h-4 w-4 text-green-500" aria-hidden />
          <span>Thanks for the feedback! We review responses weekly.</span>
        </div>
      ) : (
        <div className="space-y-4 text-sm">
          <div className="flex flex-wrap gap-3">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={handlePositive}
              className="inline-flex items-center gap-2"
            >
              <ThumbsUp className="h-4 w-4" aria-hidden />
              Yes
            </Button>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={handleNegative}
              className="inline-flex items-center gap-2"
            >
              <ThumbsDown className="h-4 w-4" aria-hidden />
              Not really
            </Button>
          </div>

          {state === 'negative' && (
            <div className="space-y-2">
              <label className="block text-xs font-medium uppercase tracking-wide text-muted-foreground">
                What could be better?
              </label>
              <Textarea
                value={comments}
                onChange={(event) => setComments(event.target.value)}
                placeholder="Share missing steps, confusing wording, or bugs..."
                rows={4}
                className="resize-none"
              />
              <Button
                type="button"
                size="sm"
                onClick={handleSubmit}
                className="inline-flex items-center gap-2"
              >
                <Send className="h-4 w-4" aria-hidden />
                Send feedback
              </Button>
            </div>
          )}
        </div>
      )}
    </section>
  );
}

