"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { usePackage } from "@/contexts/PackageContext";

export default function AIGeneratorPanel() {
  const { addMCPToPackage } = usePackage();
  const { toast } = useToast();
  const [prompt, setPrompt] = useState("");
  const [model, setModel] = useState("openrouter/auto");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any | null>(null);

  const generate = async () => {
    setLoading(true);
    setResult(null);
    try {
      const res = await fetch("/api/creator", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt, model })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Generation failed");
      setResult(data);
    } catch (e: any) {
      toast({ title: "Generation failed", description: String(e.message || e) });
    } finally {
      setLoading(false);
    }
  };

  const addToPackage = () => {
    if (!result?.mcp) return;
    addMCPToPackage(result.mcp);
    toast({ title: "Added to package", description: `${result.mcp.name} added to current package.` });
  };

  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle>AI Generator (Functional)</CardTitle>
        <CardDescription>
          Enter a description and generate an MCP using your OpenRouter key (falls back to a local stub if not configured).
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-3">
          <label className="text-sm font-medium">Describe your MCP</label>
          <Textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="e.g. An MCP that manages GitHub issues and pull requests"
            rows={4}
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-3">
          <div>
            <label className="text-sm font-medium mb-2 block">Model</label>
            <Select value={model} onValueChange={setModel}>
              <SelectTrigger>
                <SelectValue placeholder="Select model" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="openrouter/auto">Auto (OpenRouter)</SelectItem>
                <SelectItem value="anthropic/claude-3.5-sonnet">Claude 3.5 Sonnet</SelectItem>
                <SelectItem value="openai/gpt-4o">GPT-4o</SelectItem>
                <SelectItem value="google/gemini-1.5-pro">Gemini 1.5 Pro</SelectItem>
                <SelectItem value="mistralai/mixtral-8x7b-instruct">Mixtral 8x7B</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-end gap-3">
            <Button className="w-full" onClick={generate} disabled={loading || !prompt.trim()}>
              {loading ? "Generating..." : "Generate MCP"}
            </Button>
          </div>
        </div>

        {result && (
          <div className="space-y-3">
            <div className="text-sm text-muted-foreground">Source: {result.source}</div>
            <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto whitespace-pre-wrap">
{JSON.stringify(result.mcp, null, 2)}
            </pre>
            <div className="flex gap-2">
              <Button onClick={addToPackage} className="flex-1">Add to Package</Button>
              <Button variant="outline" onClick={() => navigator.clipboard.writeText(JSON.stringify(result.mcp, null, 2))}>
                Copy JSON
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

