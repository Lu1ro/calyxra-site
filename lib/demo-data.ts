export interface DailyMetric {
    date: string;
    revenue: number;
    spend: number;
    orders: number;
    net_profit: number;
    gross_margin: number;

    channels: {
        meta: ChannelMetric;
        google: ChannelMetric;
        tiktok: ChannelMetric;
        email: ChannelMetric;
    };

    customers: {
        new_revenue: number;
        returning_revenue: number;
        new_count: number;
        returning_count: number;
    };
}

interface ChannelMetric {
    spend: number;
    revenue: number;
    roas: number;
    clicks: number;
}

// --- NEW PROPS FOR TRUST LAYER ---
export type HealthStatus = 'fresh' | 'stale' | 'degraded' | 'broken';

// --- INSIGHTS ENGINE ---
export type InsightType = 'risk' | 'opportunity' | 'constraint';
export type InsightSeverity = 'high' | 'medium' | 'low';

export interface DecisionInsight {
    id: string;
    type: InsightType;
    severity: InsightSeverity;
    title: string;
    description: string;
    metric?: string;
    actionLabel?: string;
}

export interface DashboardState {
    healthStatus: HealthStatus;
    lastSyncTime: string; // ISO
    reconciliation: {
        status: 'verified' | 'estimated' | 'action_required';
        varianceAmount: number; // e.g., -145.50
        variancePercent: number; // e.g., 0.02 (2%)
        unreconciledSources: string[]; // e.g. ["TikTok Ads"]
    };
    insights: DecisionInsight[]; // NEW: The Decision Feed
    data: DailyMetric[];
}

// Helpers
const randomRange = (min: number, max: number) => Math.random() * (max - min) + min;
const formatDate = (date: Date) => date.toISOString().split('T')[0];

// Main Generator
export const generateDemoData = (): DashboardState => {
    const data: DailyMetric[] = [];
    const today = new Date();
    const startDate = new Date();
    startDate.setFullYear(today.getFullYear() - 2);

    let currentDate = new Date(startDate);
    let baseDailyRevenue = 25000;
    const growthFactor = 1.0005;

    while (currentDate <= today) {
        // ... (Simplified generation logic for brevity, reused from before but compacted)
        const dailyPotential = baseDailyRevenue * Math.pow(growthFactor, data.length) * randomRange(0.85, 1.15);
        const spend = dailyPotential * 0.3;
        const revenue = dailyPotential;

        data.push({
            date: formatDate(currentDate),
            revenue,
            spend,
            orders: Math.floor(revenue / 85),
            net_profit: revenue * 0.2, // Simplified 20% margin
            gross_margin: 0.65,
            channels: {
                meta: { spend: spend * 0.5, revenue: revenue * 0.5, roas: 3.0, clicks: 1000 },
                google: { spend: spend * 0.3, revenue: revenue * 0.3, roas: 4.0, clicks: 500 },
                tiktok: { spend: spend * 0.2, revenue: revenue * 0.2, roas: 2.0, clicks: 800 },
                email: { spend: 100, revenue: revenue * 0.1, roas: 50, clicks: 200 }
            },
            customers: {
                new_revenue: revenue * 0.6,
                returning_revenue: revenue * 0.4,
                new_count: 100,
                returning_count: 50
            }
        });
        currentDate.setDate(currentDate.getDate() + 1);
    }

    // SIMULATED INSIGHTS GENERATION
    // In a real app, this would run heuristics on the `data` array.
    const insights: DecisionInsight[] = [];

    // 1. Margin Risk (Mock)
    insights.push({
        id: 'margin-risk',
        type: 'risk',
        severity: 'high',
        title: 'Margin Alert',
        description: 'Net Margin dropped below 15% target this week due to shipping surcharge spike.',
        metric: '14.2% (Target 20%)',
        actionLabel: 'Analyze COGS'
    });

    // 2. Scale Opportunity (Mock)
    insights.push({
        id: 'scale-opp',
        type: 'opportunity',
        severity: 'medium',
        title: 'Scale Signal: Meta Ads',
        description: 'MER is healthy (3.4) while Meta ROAS is >2.8. Room to increase daily budget.',
        metric: 'Est. +€2k/day',
        actionLabel: 'View Spend'
    });

    return {
        healthStatus: 'fresh',
        lastSyncTime: new Date(Date.now() - 1000 * 60 * 15).toISOString(),
        reconciliation: {
            status: 'verified',
            varianceAmount: 0,
            variancePercent: 0,
            unreconciledSources: []
        },
        insights,
        data
    };
};

// Aggregation Helpers
export const filterData = (data: DailyMetric[], range: string) => {
    const now = new Date();
    const cutoff = new Date();
    if (range === '7d') cutoff.setDate(now.getDate() - 7);
    else if (range === '30d') cutoff.setDate(now.getDate() - 30);
    else if (range === '90d') cutoff.setDate(now.getDate() - 90);
    else if (range === '12m') cutoff.setFullYear(now.getFullYear() - 1);
    else if (range === 'ytd') cutoff.setMonth(0, 1);

    return data.filter(d => new Date(d.date) >= cutoff);
}

export const aggregateMetrics = (data: DailyMetric[]) => {
    // Keep it simple for the Trust Layer phase
    const revenue = data.reduce((a, b) => a + b.revenue, 0);
    const spend = data.reduce((a, b) => a + b.spend, 0);
    const profit = data.reduce((a, b) => a + b.net_profit, 0);

    return {
        revenue,
        spend,
        profit,
        margin_percent: revenue > 0 ? (profit / revenue) * 100 : 0
    };
};
