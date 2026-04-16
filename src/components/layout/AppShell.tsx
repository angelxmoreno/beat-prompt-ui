import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const sections = [
    {
        title: 'Composer',
        body: 'This area will eventually hold the prompt input and generation controls.',
    },
    {
        title: 'Result',
        body: 'The sanitized prompt output will appear here once generation is wired up.',
    },
    {
        title: 'Details',
        body: 'Detected style metadata, tuning controls, and variants will live here.',
    },
];

export function AppShell() {
    return (
        <div className="app-shell">
            <header className="app-shell__header">
                <div className="app-shell__brand">
                    <div className="app-shell__mark">BP</div>
                    <div className="app-shell__identity">
                        <div className="app-shell__title-row">
                            <h1 className="app-shell__title">BeatPrompt</h1>
                            <Badge variant="secondary" className="app-shell__badge">
                                MVP shell
                            </Badge>
                        </div>
                        <p className="app-shell__subtitle">Prompt cleanup for music generation.</p>
                    </div>
                </div>

                <div className="app-shell__actions">
                    <Button type="button" variant="secondary">
                        Generate
                    </Button>
                    <Button type="button">Copy prompt</Button>
                </div>
            </header>

            <Separator className="app-shell__separator" />

            <main className="app-shell__main">
                <section className="app-shell__grid" aria-label="BeatPrompt shell regions">
                    {sections.map((section, index) => (
                        <Card
                            key={section.title}
                            className={index === 1 ? 'app-shell__panel app-shell__panel--featured' : 'app-shell__panel'}
                        >
                            <CardHeader className="app-shell__panel-header">
                                <CardTitle className="app-shell__panel-title">{section.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="app-shell__panel-content">
                                <p className="app-shell__panel-copy">{section.body}</p>
                            </CardContent>
                        </Card>
                    ))}
                </section>
            </main>
        </div>
    );
}
