# Analytics Catalog

This catalog documents the shared analytics service in `apps/web/src/server/service/analytics` so developers can quickly see which analytic exists, where it is wired, and which tables it reads.

## Module Catalog

### Accounting

Route wiring: `apps/web/src/app/(dashboard)/dashboard/(finance)/accounting/dashboard/_modules/accounting-dashboard.queries.ts`

| Method | Purpose | Source tables |
|---|---|---|
| `getBalanceSheet` | Assets vs liabilities snapshot | `transactions`, `journals`, `chart_of_accounts` | `postgresql.service.ts` |
| `getIncomeStatement` | Income vs expense statement | `transactions`, `journals`, `chart_of_accounts` | `postgresql.service.ts` |
| `getExpenseRevenue` | Quick expense/revenue split | `transactions`, `journals`, `chart_of_accounts` | `postgresql.service.ts` |
| `getBalanceSheetSummary` | Aggregated assets/liabilities/equity summary | `transactions`, `journals`, `chart_of_accounts` | `postgresql.service.ts` |
| `getAccountingKPI` | KPI view by journal or category | `journals`, `transactions`, `chart_of_accounts` | `postgresql.service.ts` |
| `getJournalStatusCounts` | Journal status distribution | `journals` | `postgresql.service.ts` |
| `getBalanceSheetTimeseries` | Periodic balance sheet trend | `transactions`, `journals`, `chart_of_accounts` | `postgresql.service.ts` |
| `getIncomeStatementTimeseries` | Periodic income statement trend | `transactions`, `journals`, `chart_of_accounts` | `postgresql.service.ts` |

### Finance

Route wiring: `apps/web/src/app/(dashboard)/dashboard/my-dashboard/finance/_modules/finance-my-dashboard.queries.ts`

| Method | Purpose | Source tables | 
|---|---|---|
| `getReceivablesAging` | Aging buckets for receivables | `receivables`, `vendors`, `corporate_customers`, `employees` | `postgresql.service.ts` |
| `getPayablesAging` | Aging buckets for payables | `liabilities`, `vendors`, `corporate_customers`, `employees` | `postgresql.service.ts` |
| `getOutstandingPayments` | Net open amount by entity | `liabilities`, `receivables`, `vendors`, `corporate_customers`, `employees` | `postgresql.service.ts` |
| `getProcurementOrderStatus` | Purchase order status counts | `purchase_orders`, `vendors` | `postgresql.service.ts` |
| `getDebtServiceCoverageRatio` | Debt service coverage ratio | `transactions`, `journals`, `chart_of_accounts` | `postgresql.service.ts` |
| `getPerformanceAgainstForecast` | Planned vs actual by month | `budget_items`, `budgets`, `transactions`, `journals`, `chart_of_accounts` | `postgresql.service.ts` |
| `getExpenseCategoryBreakdown` | Expense share by category | `transactions`, `journals`, `chart_of_accounts` | `postgresql.service.ts` |

### Assets

Route wiring:
- `apps/web/src/app/(dashboard)/dashboard/(assets-inventory)/assets/analytics/_modules/assets-dashboard.queries.ts`
- `apps/web/src/app/(dashboard)/dashboard/(assets-inventory)/assets/analytics/_modules/assets-analytics.actions.ts`

| Method | Purpose | Source tables |
|---|---|---|
| `getTotalAssetValueAndDepreciationSummary` | Asset value/depreciation trend | `assets`, `asset_depreciation_entries` | `postgresql.service.ts` |
| `getRecentlyAcquiredVsRetiredAssets` | Acquired vs retired assets | `assets` | `postgresql.service.ts` |
| `getAssetCategoryBreakdown` | Category split of assets | `assets`, `asset_types` | `postgresql.service.ts` |
| `getAssetUtilizationRate` | Utilization percentage by status | `assets` | `postgresql.service.ts` |
| `getUpcomingMaintenanceSchedule` | Upcoming maintenance workload | `asset_maintenance_records`, `asset_maintenances`, `assets` | `postgresql.service.ts` |
| `getAssetDepreciationByDepartment` | Department depreciation split | `asset_depreciation_entries`, `assets`, `departments` | `postgresql.service.ts` |

### Banking

Route wiring:
- `apps/web/src/app/(dashboard)/dashboard/(banking)/banking/dashboard/_modules/banking-dashboard.queries.ts`
- `apps/web/src/app/(dashboard)/dashboard/(banking)/banking/dashboard/_modules/enhanced-dashboard.queries.ts`

| Method | Purpose | Source tables |
|---|---|---|
| `getHighValueTransactions` | Largest transactions | `bank_transactions`, `bank_accounts`, `bank_subtypes`, `bank_configs` | `postgresql.service.ts` |
| `getAccountBalancesSummary` | Account balance summary | `bank_transactions`, `bank_accounts`, `bank_subtypes`, `bank_configs` | `postgresql.service.ts` |
| `getReconciliationTimeseries` | Reconciled/unreconciled trend | `bank_transactions`, `bank_accounts`, `reconciliation_exceptions` | `postgresql.service.ts` |
| `getCashVsOutstandingLiabilities` | Cash vs liability comparison | `bank_transactions`, `bank_accounts`, `liabilities` | `postgresql.service.ts` |
| `getTreasuryOverview` | Treasury KPI rollup | `bank_transactions`, `bank_accounts` | `postgresql.service.ts` |
| `getTreasuryInflowOutflow` | Inflow/outflow by period | `bank_transactions`, `bank_accounts` | `postgresql.service.ts` |
| `getTreasuryActiveAlerts` | Risk and movement alerts | `bank_transactions`, `bank_accounts` | `postgresql.service.ts` |
| `getReconHealthSummary` | Reconciliation health KPI | `bank_transactions`, `reconciles`, `reconciliation_exceptions` | `postgresql.service.ts` |
| `getReconHealthAging` | Outstanding reconciliation aging | `bank_transactions`, `reconciles` | `postgresql.service.ts` |
| `getFxVarianceSummary` | FX variance summary totals | `transactions`, `journals` | `postgresql.service.ts` |
| `getFxVarianceByCurrencyMonth` | FX variance by month/currency | `transactions`, `journals` | `postgresql.service.ts` |
| `getFxVarianceTop` | Top FX variance lines | `transactions`, `journals` | `postgresql.service.ts` |
| `getComplianceSummary` | Compliance KPI summary | `bank_transactions`, `reconciles`, `audit_trails` | `postgresql.service.ts` |
| `getComplianceAuditActivity` | Audit activity over time | `audit_trails` | `postgresql.service.ts` |

### Receivables

Route wiring: `apps/web/src/app/(dashboard)/dashboard/(finance)/receivables/analytics/_modules/receivables-dashboard.queries.ts`

| Method | Purpose | Source tables |
|---|---|---|
| `getReceivablesDashboard` | Receivables aging dashboard | `receivables`, `corporate_customers`, `vendors` | `postgresql.service.ts` |
| `getCollectionEfficiencyRate` | Collection vs billed efficiency | `receivables`, `receivables_payments`, `sales_invoices` | `postgresql.service.ts` |
| `getRevenueCollectedVsBilled` | Monthly billed vs collected | `sales_invoices`, `receivables_payments` | `postgresql.service.ts` |
| `getPendingInvoicesAndFollowUps` | Pending invoices follow-up list | `sales_invoices`, `receivables`, `corporate_customers` | `postgresql.service.ts` |

### Inventory

Route wiring: `apps/web/src/app/(dashboard)/dashboard/(assets-inventory)/inventory/analytics/_modules/inventory-analytics.queries.ts`

| Method | Purpose | Source tables |
|---|---|---|
| `getCurrentStockLevelsByCategory` | Current stock by category | `inventory_stock`, `inventory_item`, `inventory_config_type` | `inventory-analytics.service.ts` |
| `getWarehouseUtilizationRate` | Warehouse utilization metric | `inventory_location`, `inventory_stock` | `inventory-analytics.service.ts` |
| `getLowStockAlerts` | Reorder/critical stock alerts | `inventory_item`, `inventory_stock`, `inventory_config_type`, `vendors` | `inventory-analytics.service.ts` |
| `getStockExpiryAndObsolescenceReport` | Expiry and obsolescence tracking | `inventory_lot`, `inventory_item` | `inventory-analytics.service.ts` |
| `getInventoryTurnoverRate` | COGS to average stock turnover | `sales_invoice_items`, `sales_invoices`, `inventory_item`, `inventory_stock` | `inventory-analytics.service.ts` |
| `getPendingInventoryTransfers` | Pending transfer movements | `inventory_movement`, `inventory_item`, `inventory_location` | `inventory-analytics.service.ts` |

### Procurement (shared analytics service)

Shared service file: `apps/web/src/server/service/analytics/procurement-analytics.service.ts`

| Method | Purpose | Source tables |
|---|---|---|
| `getPurchaseOrdersStatusCounts` | PO status distribution | `purchase_orders` | `procurement-analytics.service.ts` |
| `getSupplierPerformanceScore` | Supplier performance scoring | `vendors`, `item_receiving` | `procurement-analytics.service.ts` |
| `getPendingVsApprovedRequests` | Department request status split | `purchase_request`, `department`, `employee_departments`, `employees`, `users` | `procurement-analytics.service.ts` |
| `getBudgetUtilizationForProcurement` | Budget vs actual procurement spend | `transactions`, `journals`, `budgets`, `budget_items` | `procurement-analytics.service.ts` |
| `getLeadTimePerCategory` | Procurement lead time by category | `product_category_pivot`, `products`, `categories`, `received_items`, `item_receiving`, `purchase_orders`, `purchase_order_items` | `procurement-analytics.service.ts` |

Important note: The `/dashboard/procurement/analytics` page currently uses a local page module service at `apps/web/src/app/(dashboard)/dashboard/procurement/analytics/_modules/analytics.service.ts`, not this shared `procurementAnalyticsService`.

### Liabilities

Route wiring: `apps/web/src/app/(dashboard)/dashboard/(finance)/liabilities/analytics/_modules/liabilities-dashboard.queries.ts`

| Method | Purpose | Source tables |
|---|---|---|
| `getLiabilitiesByAccount` | Account-wise liabilities | `liabilities`, `chart_of_accounts` | `postgresql.service.ts` |
| `getLiabilitiesByCreditor` | Creditor-wise liabilities | `liabilities`, `vendors`, `corporate_customers`, `employees` | `postgresql.service.ts` |
| `getLiabilitiesByLocation` | Location-wise liabilities | `liabilities`, `locations` | `postgresql.service.ts` |
| `getLiabilitiesGroupTimeseries` | Liability group timeseries | `liabilities`, `liabilities_config_groups` | `postgresql.service.ts` |
| `getLiabilitiesByItem` | Liability item breakdown | `liabilities`, `liabilities_config_items` | `postgresql.service.ts` |
| `getDebtEquityRatio` | Debt/equity ratio metric | `liabilities`, `transactions`, `journals`, `chart_of_accounts` | `postgresql.service.ts` |
| `getLiabilityTrends` | Short/long-term liability trends | `liabilities`, `liabilities_payments` | `postgresql.service.ts` |

### Sales

Route wiring: `apps/web/src/app/(dashboard)/dashboard/sales/analytics/_modules/sales-analytics.queries.ts`

| Method | Purpose | Source tables |
|---|---|---|
| `getTotalRevenuePerCustomerCategory` | Revenue by customer grade | `sales_invoices`, `corporate_customers`, `customer_grades` | `postgresql.service.ts` |
| `getMonthlySalesTrends` | Monthly sales trend | `sales_invoices` | `postgresql.service.ts` |
| `getNewVsLostCustomers` | New/lost customer trend | `sales_orders`, `corporate_customers` | `postgresql.service.ts` |
| `getBillingAccuracyRate` | Billing mismatch ratio | `sales_invoices`, `sales_orders` | `postgresql.service.ts` |
| `getOutstandingInvoices` | Outstanding invoice list | `sales_invoices`, `corporate_customers` | `postgresql.service.ts` |
| `getCustomerPaymentModeDistribution` | Payment mode usage | `sales_payments`, `payment_modes` | `postgresql.service.ts` |

### HRM

Route wiring:
- `apps/web/src/app/(dashboard)/dashboard/hrm/analytics/_modules/hr-analytics.actions.ts`
- `apps/web/src/app/(dashboard)/dashboard/hrm/analytics/_modules/hr-analytics.service.ts`

| Method | Purpose | Source tables |
|---|---|---|
| `getTotalEmployeesByDepartment` | Headcount by department | `employees`, `employee_departments`, `department` | `postgresql.service.ts` |
| `getEmployeeTurnover` | Turnover by department | `employees`, `employee_departments`, `department` | `postgresql.service.ts` |
| `getPayrollSummary` | Payroll totals by month | `salary_slip`, `pay_components`, `employees` | `postgresql.service.ts` |
| `getEmployeeSatisfactionScore` | Satisfaction proxy score | `employees`, `leaves`, `attendances`, `trainings` | `postgresql.service.ts` |
| `getTrainingCompletionRate` | Training completion rates | `trainings`, `employees`, `department` | `postgresql.service.ts` |
| `getLeaveAndAttendanceSummary` | Leave/attendance monthly summary | `leaves`, `attendances`, `employees`, `department` | `postgresql.service.ts` |
| `getEthnicityDemographics` | Ethnicity/religion distribution | `employees` | `postgresql.service.ts` |
| `getNationalityDemographics` | Nationality split | `employees`, `countries` | `postgresql.service.ts` |
| `getEmploymentStatus` | Employment type distribution | `employees`, `employment_type` | `postgresql.service.ts` |
| `getGenderDemographics` | Gender split | `employees` | `postgresql.service.ts` |
| `getAgeDemographics` | Age group split | `employees` | `postgresql.service.ts` |
| `getDepartmentalDistribution` | Department population distribution | `employees`, `employee_departments`, `department` | `postgresql.service.ts` |
| `getYearsOfService` | Tenure distribution | `employees` | `postgresql.service.ts` |
| `getQualifications` | Qualification distribution | `employee_education`, `employees` | `postgresql.service.ts` |
| `getRolesAndGrades` | Role/grade distribution | `employee_roles`, `employee_grade`, `employees` | `postgresql.service.ts` |

### Leave

Route wiring: `apps/web/src/app/(dashboard)/dashboard/hrm/(shift-and-attendance)/(leave)/leave-analytics/_modules/leave-reports.queries.ts`

| Method | Purpose | Source tables |
|---|---|---|
| `getLeaveTypeAvg` | Avg leave days by type/month | `leaves`, `leave_type`, `employees` | `postgresql.service.ts` |
| `getLeaveKpi` | Leave KPI summary | `leaves`, `leave_type` | `postgresql.service.ts` |
| `getLeaveByDepartment` | Leave by department | `leaves`, `employees`, `employee_departments`, `department` | `postgresql.service.ts` |
| `getLeaveByType` | Leave by leave type | `leaves`, `leave_type` | `postgresql.service.ts` |
| `getLeaveMonthlyTrend` | Leave monthly trend | `leaves` | `postgresql.service.ts` |
| `getLeaveStatusDistribution` | Leave status split | `leaves` | `postgresql.service.ts` |
| `getLeaveBalanceSummary` | Leave balance by type | `leave_balances`, `leave_type`, `employees` | `postgresql.service.ts` |

## Reverse Index: Table -> Analytics

- `transactions`: accounting, finance, banking, liabilities, procurement
- `journals`: accounting, finance, banking, liabilities, procurement
- `chart_of_accounts`: accounting, finance, liabilities
- `receivables`: finance, receivables
- `liabilities`: finance, banking, liabilities
- `assets`: assets
- `bank_transactions`: banking
- `audit_trails`: banking
- `sales_invoices`: receivables, sales, inventory
- `sales_orders`: sales
- `sales_payments`: sales
- `inventory_item`: inventory
- `inventory_stock`: inventory
- `inventory_location`: inventory
- `inventory_lot`: inventory
- `inventory_movement`: inventory
- `purchase_orders`: finance, procurement
- `purchase_request`: procurement
- `purchase_order_items`: procurement
- `item_receiving`: procurement
- `received_items`: procurement
- `vendors`: finance, receivables, inventory, procurement, liabilities
- `budgets`: finance, procurement
- `budget_items`: finance, procurement
- `employees`: finance, receivables, liabilities, hrm, leave, procurement
- `department`: procurement, hrm, leave
- `employee_departments`: procurement, hrm, leave
- `users`: procurement, hrm
- `corporate_customers`: finance, receivables, liabilities, sales

## Route Map (UI -> Query Layer -> Service)

- `/dashboard/accounting/dashboard` -> `accounting-dashboard.queries.ts` -> `analyticsService.accounting.*`
- `/dashboard/my-dashboard/finance` -> `finance-my-dashboard.queries.ts` -> `analyticsService.finance.*`
- `/dashboard/assets/analytics` -> `assets-dashboard.queries.ts` + `assets-analytics.actions.ts` -> `analyticsService.assets.*`
- `/dashboard/banking/dashboard` -> `banking-dashboard.queries.ts` + `enhanced-dashboard.queries.ts` -> `analyticsService.banking.*`
- `/dashboard/receivables/analytics` -> `receivables-dashboard.queries.ts` -> `analyticsService.receivables.*`
- `/dashboard/liabilities/analytics` -> `liabilities-dashboard.queries.ts` -> `analyticsService.liabilities.*`
- `/dashboard/sales/analytics` -> `sales-analytics.queries.ts` -> `analyticsService.sales.*`
- `/dashboard/hrm/analytics` -> `hr-analytics.actions.ts` + `hr-analytics.service.ts` -> `analyticsService.hrm.*`
- `/dashboard/hrm/leave-analytics` -> `leave-reports.queries.ts` -> `leaveAnalyticsService.*`
- `/dashboard/inventory/analytics` -> `inventory-analytics.queries.ts` -> `inventoryAnalyticsService.*`
- `/dashboard/procurement/analytics` -> `procurement/analytics/_modules/analytics.queries.ts` -> local `ProcurementAnalyticsService` in same route module

## How To Add A New Analytic

1. Add params and result zod schemas in `apps/web/src/server/service/analytics/interfaces.ts`.
2. Extend the module interface (`IAccountingModule`, `IFinanceModule`, and so on) in `interfaces.ts`.
3. Export schemas/types in `apps/web/src/server/service/analytics/index.ts`.
4. Implement SQL in `apps/web/src/server/service/analytics/postgresql.service.ts` (or keep inline for modules that own SQL like inventory/procurement).
5. Add service wrapper in module service (`*-analytics.service.ts`) with input/output validation.
6. Wire the query/action caller in dashboard module `_modules/*.queries.ts` or `_modules/*.actions.ts`.
7. Add/extend cache tags in `apps/web/src/config/cache-tags.ts`.
8. Ensure team isolation (`teamId`) and soft-delete filters (`deleted_at IS NULL` or equivalent).
9. Restrict financial reads to posted data when required (`status = 'posted'`).
10. Infer return types using `Awaited<ReturnType<typeof ...>>`; do not handcraft payload types.
11. Invalidate/revalidate cache after related mutations with cache tag helpers.
12. Update this catalog with new method, table list, and route wiring.

## Conventions

- All analytics services are `server-only`.
- Shared facade is `apps/web/src/server/service/analytics/analytics.service.ts`.
- Most modules delegate to `postgresql.service.ts`; inventory and shared procurement are inline SQL.
- Prefer explicit zod parse on input and output for type-safe boundaries.
