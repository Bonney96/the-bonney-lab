---
title: "Experimental Summary: EpiBench5 Methylation Prediction Project"
date: "2024-03-12"
tags: ["epigenetics", "methylation-prediction", "histone-marks", "AML", "CD34", "machine-learning"]
status: "growing"
related: ["Projects/EpiBench/epibench-aml-study", "Projects/EpiBench/epibench-model-improvements"]
---

# Experimental Summary: EpiBench5 Methylation Prediction Project

*This document summarizes our experimental work on predicting DNA methylation patterns using histone mark data through the EpiBench5 framework. Last updated: 2024-03-12*

## 1. Dataset Analysis and Preparation

We began by examining histone mark datasets across multiple samples:

- **CD34 samples** (RO04046, RO04050, RO04068): Normal CD34 samples with various histone marks
- **AML samples** (263578, 463352, 847670): AML patient samples with different patterns of histone marks

Each sample had varying numbers of histone peaks:

**Sample 263578-20118_3_pb:**
- H3K4me3 peaks: 256,364
- H3K4me peaks: 325,730
- H3K27me3 peaks: 9,487
- H3K36me3 peaks: 12,920
- H3K9me3 peaks: 9,800

**Sample 463352-0923936_2_pb:**
- H3K4me3 peaks: 132,374
- H3K4me peaks: 455,304
- H3K27me3 peaks: 33,849
- H3K36me3 peaks: 11,014
- H3K9me3 peaks: 14,089

**Sample 847670-1597262a_3_bm:**
- H3K4me3 peaks: 264,608
- H3K4me peaks: 321,790
- Plus other histone marks

## 2. Model Development and Infrastructure Setup

We modified the EpiBench pipeline to:

- Move from Docker-based execution to direct Python execution
- Create a custom inference module for handling different input formats
- Address channel mismatches between model expectations and data availability
- Fix file path issues for histone data location

## 3. Model Training and Comparison

We worked with two main models:

- **Original CD34-trained model**: The baseline model trained on CD34 samples
- **New AML-trained model**: A specialized model trained on AML sample 263578 data

Key architectural differences:
- The AML model used 96 fully connected units (fc_units)
- The CD34 model used 128 fully connected units
- Both models expected 12 input channels (4 DNA, 6 histone, 2 region features)

## 4. Prediction Experiments

We ran several prediction experiments:

- Original model on CD34 samples: Baseline performance
- Original model on AML samples: Testing generalization to disease samples
- AML-trained model on AML samples: Testing performance on training-like data
- AML-trained model on CD34 samples: Testing generalization to normal samples

We compared the predictions between models and against actual methylation data.

## 5. Results Visualization and Analysis

We created several visualization tools to analyze the results:

- Model comparison plots: Comparing predictions between models
- Prediction accuracy plots: Comparing predictions to actual methylation values
- Error distribution plots: Analyzing the distribution of prediction errors

Most recently, we created the `compare_aml_methylation.py` script to generate scatter plots comparing predicted vs. actual methylation values for the AML samples, producing:
- Individual sample performance plots
- Error distribution histograms
- Combined visualization across all samples

## 6. Technical Challenges Addressed

Throughout these experiments, we successfully addressed several technical challenges:

- Fixed path issues for rescaled bigWig files in the prediction pipeline
- Corrected capitalization inconsistencies in file extensions (.bigWig vs .bigwig)
- Modified model architecture parameters to ensure compatibility between different models
- Implemented proper handling of missing histone marks in the prediction process

These experiments have provided valuable insights into how well methylation prediction models generalize across different sample types and the importance of careful data preparation and model configuration.

## Visualizations

### Original CD34-trained Model Performance

#### AML Samples (CD34 Model)
![[assets/CD34_model/263578_methylation_comparison.png]]

![[assets/CD34_model/463352_methylation_comparison.png]]

![[assets/CD34_model/847670_methylation_comparison.png]]

#### CD34 Samples (CD34 Model)
![[assets/CD34_model/methylation_prediction_scatter_RO04046.png]]

![[assets/CD34_model/methylation_prediction_scatter_RO04050.png]]

![[assets/CD34_model/methylation_prediction_scatter_RO04068.png]]

#### Enhanced Visualization (CD34 Model)
![[assets/CD34_model/enhanced_visualization_sample_0.png]]

### AML-trained Model Performance

#### AML Samples (AML Model)
![[assets/AML_model/methylation_comparison_263578.png]]

![[assets/AML_model/methylation_comparison_463352.png]]

![[assets/AML_model/methylation_comparison_847670.png]]

#### CD34 Samples (AML Model)
![[assets/AML_model/methylation_prediction_scatter_RO04046.png]]

![[assets/AML_model/methylation_prediction_scatter_RO04050.png]]

![[assets/AML_model/methylation_prediction_scatter_RO04068.png]]

#### Enhanced Visualization (AML Model)
![[assets/AML_model/enhanced_visualization_sample_0.png]]

### Interactive Visualizations

The following interactive visualizations are available but may require opening the HTML files directly:

- [CD34 Model Interactive Visualization](assets/CD34_model/cnn_pred_vs_actual_interactive.html)
- [AML Model Interactive Visualization](assets/AML_model/cnn_pred_vs_actual_interactive.html)

*Note: The interactive visualizations require a web browser to view and explore the data in detail.* 