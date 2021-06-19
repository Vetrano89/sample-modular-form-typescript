export interface InsightTipConstructor {
    number: number;
    environmentType: string;
    preposition?: 'in' | 'with'; // Necessary depending on if we are "working in" something or "working with"
}

export interface Tip {
    title: string;
    body: string;
}

export function constructInsightTip({ number, environmentType, preposition = 'in' }: InsightTipConstructor): Tip {
    // TODO: This won't work for all words (ex `hour` displays as `a hour`)
    // In the future we can check against a list of words if this is a common enough issue

    const vowelRegex = '^[aieouAIEOU].*';
    const matched = environmentType.match(vowelRegex);
    const article = matched ? 'an' : 'a';
    const isPlural = number > 1;
    const verb = isPlural ? 'are' : 'is';
    const pluralEnding = isPlural ? 's' : '';

    return {
        title: 'Insights',
        body: `There ${verb} @${number}@ expert${pluralEnding} working ${preposition} ${article} ${environmentType} environment.`
    }
}
