---
title: "EpiBench Technical Requirements and Setup"
date: "2024-09-20"
tags: ["epigenetics", "bioinformatics", "technical", "installation"]
status: "growing"
related: ["Projects/EpiBench/epibench-introduction", "Projects/EpiBench/epibench-aml-case-study"]
---

# EpiBench: Technical Requirements and Setup

![EpiBench Technical Setup](https://via.placeholder.com/800x400?text=EpiBench+Technical+Setup)

*This note outlines the technical requirements and setup process for EpiBench. Since this is an active project, requirements may evolve—check back for updates. Last updated: 2024-09-20*

## Hardware Requirements

EpiBench is designed to handle large genomic datasets and train sophisticated neural network models. As such, it has specific hardware recommendations for optimal performance:

### Minimum Requirements

- **CPU**: 4+ cores (8+ threads)
- **RAM**: 16GB
- **Storage**: 50GB free space (SSD recommended)
- **GPU**: Not strictly required, but CPU-only training will be significantly slower

### Recommended Specifications

- **CPU**: 8+ cores (16+ threads), modern AMD Ryzen or Intel i7/i9
- **RAM**: 32GB+
- **Storage**: 100GB+ SSD
- **GPU**: NVIDIA GPU with 8GB+ VRAM (RTX 2070 or better)
  - CUDA-compatible GPU required for GPU acceleration
  - RTX 3080/3090 or A100 recommended for large datasets or complex models

### High-Performance Computing

For institutional users analyzing multiple datasets or training custom models, we recommend:

- Access to an HPC cluster with GPU nodes
- Job submission through SLURM, LSF, or similar scheduler
- Shared storage for large reference genomes and datasets

## Software Dependencies

EpiBench relies on several key software components and libraries:

### Core Requirements

- **Python**: Version 3.7+ (3.8 or 3.9 recommended)
- **CUDA**: Version 11.0+ (for GPU acceleration)
- **cuDNN**: Compatible with installed CUDA version

### Key Python Libraries

| Library | Purpose | Version |
|---------|---------|---------|
| PyTorch | Deep learning framework | 1.8.0+ |
| Biopython | Genomic sequence processing | 1.78+ |
| pyBigWig | Histone modification data handling | 0.3.18+ |
| Pandas | Data manipulation | 1.3.0+ |
| NumPy | Numerical operations | 1.20.0+ |
| Scikit-learn | Traditional ML algorithms and metrics | 0.24.0+ |
| Matplotlib | Basic visualization | 3.4.0+ |
| Seaborn | Statistical visualization | 0.11.0+ |
| Plotly | Interactive visualization | 5.1.0+ |

## Environment Setup

We strongly recommend using a dedicated conda environment for EpiBench:

```bash
# Create a new conda environment
conda create -n epibench python=3.9

# Activate the environment
conda activate epibench

# Install PyTorch with CUDA support
conda install pytorch cudatoolkit=11.3 -c pytorch

# Install bioinformatics libraries
conda install -c bioconda biopython pybigwig pyfaidx

# Install data science tools
conda install pandas numpy scikit-learn matplotlib seaborn plotly

# Install additional dependencies
pip install captum  # For model interpretability
```

## Data Requirements

EpiBench works with several data types, each with specific format requirements:

### Reference Genome

- Complete reference genome in FASTA format
- Common choices include hg38 or hg19 for human data
- Must match the genome build used for your other data types

### Epigenetic Data

- **DNA Methylation**: BED or CSV files with coordinates and methylation scores
- **Histone Modifications**: BigWig format signal tracks
  - Each histone mark should be in a separate file
  - Files should use the same genomic coordinate system

### Sample Metadata

- CSV files with sample information
- Must include sample IDs that match filenames
- Additional clinical or experimental annotations as needed

## Disk Space Considerations

Be aware that genomic analyses can require significant storage:

- **Reference Genome**: ~3GB (compressed)
- **BigWig Files**: ~1-5GB per histone mark per sample
- **Methylation Data**: ~0.5-2GB per sample
- **Model Checkpoints**: ~0.5-1GB per model
- **Visualization Outputs**: ~1-5GB depending on detail level

## Installation Process

### Option 1: Direct Installation

1. Clone the EpiBench repository:
   ```bash
   git clone https://github.com/username/epibench.git
   cd epibench
   ```