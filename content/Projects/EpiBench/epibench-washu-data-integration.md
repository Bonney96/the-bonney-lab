---
title: "EpiBench: WashU Data Integration Progress"
date: "2024-10-05"
tags: ["epigenetics", "bioinformatics", "data-integration", "washington-university"]
status: "seed"
related: ["Projects/EpiBench/epibench-introduction", "Projects/EpiBench/epibench-project-initialization"]
---

# EpiBench: WashU Data Integration Progress

![Data Integration Workflow](https://via.placeholder.com/800x400?text=Data+Integration+Workflow)

*This note documents the ongoing data integration efforts for EpiBench at Washington University. Last updated: 2024-10-05*

## Data Integration Overview

A critical phase of adapting EpiBench to the Washington University environment is integrating local datasets and establishing appropriate data pipelines. This note tracks progress and challenges in this effort.

## Available Datasets

The Spencer Lab has provided access to several key datasets:

1. **Acute Myeloid Leukemia (AML) Cohort**
   - 50 patient samples
   - Whole-genome bisulfite sequencing (WGBS) data
   - ChIP-seq data for key histone modifications (H3K4me3, H3K27me3, H3K27ac)
   - RNA-seq expression data

2. **Normal Hematopoietic Cell Controls**
   - CD34+ hematopoietic stem/progenitor cells
   - Mature myeloid lineage cells
   - Complete epigenetic profiling

3. **Cancer Cell Line Encyclopedia (CCLE)**
   - Subset of myeloid leukemia cell lines
   - Methylation arrays
   - Histone ChIP-seq
   - Expression data

## Data Processing Workflow Development

I've developed the following data processing pipeline components:

### 1. Data Acquisition Modules

- WGBS processing script (alignment and methylation calling)
- ChIP-seq alignment and peak calling workflow
- Expression data normalization procedures

### 2. Quality Control Metrics

- Implemented automated QC reports for each data type
- Created data visualization for batch effect detection
- Established minimum quality thresholds

### 3. Integration Challenges

- [ ] Resolving coordinate system differences between datasets
- [ ] Handling missing data in some samples
- [ ] Normalizing signal across different experimental batches

## Initial Benchmarks

Using a subset of 10 AML samples with complete data:

| Data Type | Processing Time | Storage | QC Pass Rate |
|-----------|----------------|---------|--------------|
| WGBS | 48-72 hours/sample | ~50GB/sample | 90% |
| ChIP-seq | 12-24 hours/sample | ~10GB/sample | 85% |
| RNA-seq | 6-8 hours/sample | ~5GB/sample | 95% |

## Next Steps

- [ ] Complete processing of remaining AML samples
- [ ] Integrate clinical metadata with molecular profiles
- [ ] Implement automated pipeline for new incoming samples
- [ ] Create standardized feature matrices for machine learning

## Technical Notes

```python
# Sample code for methylation data normalization
import pandas as pd
import numpy as np

def normalize_methylation(beta_values, method='quantile'):
    """
    Normalize methylation beta values
    
    Parameters:
    -----------
    beta_values : pandas DataFrame
        DataFrame of methylation beta values (0-1)
    method : str
        Normalization method: 'quantile' or 'bmiq'
        
    Returns:
    --------
    pandas DataFrame of normalized beta values
    """
    # Placeholder for actual implementation
    # This will be replaced with actual code
    
    return normalized_values
```

## Discussion Points for Next Meeting

1. Should we prioritize depth or breadth for additional sample processing?
2. How to handle the heterogeneity in the AML cohort?
3. Requirements for integration with existing Spencer Lab pipelines
4. Computing resource allocation for the next phase

---

*Note: This is a working document that will be updated as the data integration phase progresses. For background on the project initialization, see [[Projects/EpiBench/epibench-project-initialization|EpiBench Project Initialization]].* 